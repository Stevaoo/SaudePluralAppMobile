// app/index.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/Button';
import { spacing } from '../constants/theme';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bg}
        imageStyle={{ resizeMode: 'cover' }}
      >

        <View style={styles.bottom}>
          <Button title="Cadastre-se" onPress={() => router.push('/register')} style={styles.btn} />
          <View style={{ height: spacing.sm }} />
          <Button title="Já tenho uma conta" onPress={() => router.push('/login')} style={[styles.btn, styles.ghost]} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'space-between' },
  center: { alignItems: 'center', marginTop: 40 },
  badge: { width: 220, height: 220 },
  bottom: { padding: 20, alignItems: 'center' },
  btn: { width: '90%' },
  ghost: { backgroundColor: 'rgba(255,255,255,0.6)', borderWidth: 0 }
});
