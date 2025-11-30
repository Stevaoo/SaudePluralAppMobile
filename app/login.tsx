// app/login.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/images/background.png')} style={styles.bg}>
        <View style={styles.header}>
          <Image source={require('../assets/images/logo.png')} style={{ width: 48, height: 48 }} />
          <Text style={styles.title}>Saúde Plural</Text>
        </View>

        <View style={styles.card}>
          <Input placeholder="E-mail" />
          <View style={{ height: 12 }} />
          <Input placeholder="Senha" secureTextEntry />
          <View style={{ height: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <View style={styles.checkbox} />
            </TouchableOpacity>
            <Text>Salvar senha</Text>
          </View>

          <View style={{ height: 18 }} />
          <Button title="Entrar" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  title: { marginLeft: 12, fontSize: 18, fontWeight: '700' },
  card: {
    marginTop: 60,
    alignSelf: 'center',
    width: '85%',
    padding: 18,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    elevation: 3
  },
  checkbox: { width: 18, height: 18, borderRadius: 4, borderWidth: 1, borderColor: '#999' }
});
