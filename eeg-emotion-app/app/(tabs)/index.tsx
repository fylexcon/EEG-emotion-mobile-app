import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MainScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#0D1B2A', '#1B263B', '#415A77']}
      style={styles.container}
    >
      <Text style={styles.title}>🧠 EEG Duygu Tahmini</Text>

      <View style={styles.buttonPanel}>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => router.push('/emotion')}>
          <Feather name="smile" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Anlık Hissedilen Duygu</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => router.push('/page2')}>
          <Ionicons name="analytics" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Yeni Analiz Başlat</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => router.push('/page3')}>
          <MaterialIcons name="history" size={24} color="#E0E1DD" />
          <Text style={styles.buttonText}>Geçmiş Raporlar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0E1DD',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonPanel: {
    width: width * 0.9,
    backgroundColor: '#1B263Baa',
    borderRadius: 20,
    padding: 24,
    gap: 16,
  },
  button: {
    backgroundColor: '#415A77',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.8,
  },
  buttonText: {
    color: '#E0E1DD',
    fontSize: 17,
    fontWeight: '600',
  },
});
