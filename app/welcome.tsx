// app/welcome.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

const { width } = Dimensions.get('window');

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bg}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Saúde Plural</Text>

            <Text style={styles.paragraph}>
              Este curso pretende ampliar e aperfeiçoar a capacitação dos profissionais da área de saúde,
              com ações práticas e reflexivas sobre acolhimento e atendimento às populações LGBTQIA+,
              fortalecendo a atenção integral, com respeito e dignidade.
            </Text>

            <Text style={styles.credit}>Técnico em Enfermagem - 2024</Text>

            <View style={{ marginTop: 18 }}>
              <Button title="Iniciar" onPress={() => router.push('/home1')} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center' },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.94)',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    elevation: 6
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A2B33',
    marginBottom: 8
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20
  },
  credit: {
    marginTop: 12,
    fontSize: 12,
    color: '#666'
  }
});
