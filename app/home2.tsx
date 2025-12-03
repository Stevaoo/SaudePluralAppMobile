// app/home2.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import ModuleCard from '../components/ui/module-card';

export default function Home2() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bg}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.header}>
          <Text style={styles.logoTitle}>Saúde Plural</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.searchRow}>
            <TextInput
              placeholder="Nome do usuário aqui"
              placeholderTextColor="#666"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

          <ModuleCard
            title="Introdução"
            subtitle="Apresentação do projeto e objetivos"
            color="#FFD1D1"
            onPress={() =>
              router.push({
                pathname: "/module/[id]",
                params: { id: "1" },
              })
            }
          />

          <ModuleCard
            title="U1"
            subtitle="Diretrizes e procedimentos"
            color="#FFF3C4"
            onPress={() =>
              router.push({
                pathname: "/module/[id]",
                params: { id: "2" },
              })
            }
          />

          <ModuleCard
            title="U2"
            subtitle="Políticas públicas"
            color="#D6F5D6"
            onPress={() =>
              router.push({
                pathname: "/module/[id]",
                params: { id: "3" },
              })
            }
          />

          <ModuleCard
            title="U3"
            subtitle="Atendimento acolhedor"
            color="#DCEBFF"
            onPress={() =>
              router.push({
                pathname: "/module/[id]",
                params: { id: "4" },
              })
            }
          />

          <ModuleCard
            title="U4"
            subtitle="Atenção na prática"
            color="#F0D9FF"
            onPress={() =>
              router.push({
                pathname: "/module/[id]",
                params: { id: "5" },
              })
            }
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  header: { paddingTop: 12, paddingHorizontal: 18 },
  logoTitle: { fontSize: 18, fontWeight: '700', color: '#0A2B33' },
  scroll: { padding: 18, paddingBottom: 60 },
  searchRow: { marginBottom: 12 },
  input: {
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EEE',
  },
});

