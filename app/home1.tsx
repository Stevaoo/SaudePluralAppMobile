// app/home1.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import ModuleCard from '../components/ui/module-card'; // abaixo vou mostrar o componente; crie a pasta/components se quiser

const { width } = Dimensions.get('window');

const modules = [
  { id: '1', title: 'Introdução', color: '#FFD1D1', subtitle: 'Conceitos básicos e histórico' },
  { id: '2', title: 'U1', color: '#FFF3C4', subtitle: 'Atendimento e protocolos' },
  { id: '3', title: 'U2', color: '#D6F5D6', subtitle: 'Direitos e políticas públicas' },
  { id: '4', title: 'U3', color: '#DCEBFF', subtitle: 'Abordagem acolhedora' },
  { id: '5', title: 'U4', color: '#F0D9FF', subtitle: 'Atenção na prática' },
];

export default function Home1() {
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

        <View style={styles.content}>
          <View style={styles.searchRow}>
            <TextInput
              placeholder="Nome do usuário aqui"
              placeholderTextColor="#666"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TouchableOpacity style={styles.menuBtn} onPress={() => router.push('/profile')}>
              <Text style={{ color: '#0A2B33', fontWeight: '700' }}>≡</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={modules}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ModuleCard
                title={item.title}
                subtitle={item.subtitle}
                color={item.color}
                onPress={() => router.push(`/module/${item.id}`)}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            contentContainerStyle={{ paddingBottom: 40, paddingTop: 8 }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  header: { paddingTop: 12, paddingHorizontal: 18 },
  logoTitle: { fontSize: 18, fontWeight: '700', color: '#0A2B33' },
  content: { flex: 1, padding: 18 },
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  input: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  menuBtn: {
    marginLeft: 10,
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
