// src/components/Input.tsx
import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (t: string) => void;
  secureTextEntry?: boolean;
  style?: any;
  label?: string;
};

export default function Input({ placeholder, value, onChangeText, secureTextEntry, style, label }: Props) {
  return (
    <View style={[styles.wrapper, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  label: { marginBottom: 6, color: '#333', fontSize: 13 },
  input: {
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: '#E6E6E6'
  }
});
