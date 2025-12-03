// components/ui/module-card.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  color?: string;
  onPress?: () => void;
};

export default function ModuleCard({ title, subtitle, color = '#FFF', onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  left: { flex: 1, paddingRight: 6 },
  title: { fontSize: 16, fontWeight: '700', color: '#0A2B33' },
  subtitle: { marginTop: 6, fontSize: 12, color: '#444' },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: { fontSize: 18, color: '#0A2B33', fontWeight: '700' }
});
