// app/register.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Register() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
    source={require('../assets/images/background.png')}
    style={styles.bg}
    imageStyle={{ resizeMode: 'cover' }}
>

        <View style={styles.header}>
            <Image source={require('../assets/images/logo.png')} style={{ width: 48, height: 48 }} />
            <Text style={styles.title}>Saúde Plural</Text>
        </View>

        <View style={styles.card}>
            <Input label="Nome" placeholder="Nome" />
            <View style={{ height: 10 }} />
            <Input label="Sobrenome" placeholder="Sobrenome" />
            <View style={{ height: 10 }} />
        <Input label="E-mail" placeholder="E-mail" />
        <View style={{ height: 10 }} />
        <Input label="Senha" placeholder="Senha" secureTextEntry />
        <View style={{ height: 10 }} />
        <Input label="Profissão" placeholder="Profissão" />
        <View style={{ height: 18 }} />
        <Button title="Cadastrar" />
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
    marginTop: 40,
    alignSelf: 'center',
    width: '80%',
    padding: 18,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    elevation: 3
    } 
});
