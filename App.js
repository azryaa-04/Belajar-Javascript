import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [nama, setNama] = useState(''); 

  function sapaPengguna() {
    if (nama.trim() === '') {
      Alert.alert('Halo!', 'Ketik namamu dulu.');
      return;
    }

    Alert.alert('Halo!', `Senang bertemu denganmu, ${nama}!`);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Image source='./asset/images/splash-icon.png'></Image>
        <Text style={styles.judul}>Belajar React Native</Text>
        <Text style={styles.keterangan}>
          Tulis namamu, lalu tekan tombol.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nama kamu"
          value={nama}
          onChangeText={setNama}
        />

        <Pressable style={styles.tombol} onPress={sapaPengguna}>
          <Text style={styles.teksTombol}>Sapa saya</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F5FB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  judul: {
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#20243A',
  },
  keterangan: {
    marginBottom: 24,
    fontSize: 16,
    color: '#606579',
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#C8CCDA',
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  tombol: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#4263EB',
  },
  teksTombol: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});