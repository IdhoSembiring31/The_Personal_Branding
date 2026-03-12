import { View, Text, Image, StyleSheet,ImageBackground  } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_700Bold,
});

if (!fontsLoaded) {
  return null;
}
  return (
        <View style={styles.container}>
      
      <Image 
        source={require("../../assets/images/photo_profile.jpeg")}
        style={styles.profilePic} 
      />

      <Text style={styles.name}>IDHO JONATHAN SEMBIRING</Text>
      <Text style={styles.nim}>NIM: 243303621251</Text>
      <Text style={styles.jurusan}>Sistem Informasi</Text>

      <View style={styles.Card}>
        <Text style={styles.motivation}>
          “According to aerodynamics, the bumblebee shouldn’t be able to fly.
          Its wings are too small to get its fat little body off the ground.
          But the bee flies anyway.”
        </Text>
      </View>

      <Text style={styles.bioText}>
        🚀 Currently mastering React Native SDK 50.
        Goal: Build goated apps!
      </Text>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundcolor:"#000000"
    
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,

    shadowColor: '#ffff99',
    shadowOffset: { width: 0, height: 0 },
    elevation: 40,
    
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
    fontFamily: "Poppins_700Bold",
  },
  nim: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,
    fontFamily: "Poppins_700Bold",
  },
  jurusan: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 20,
    letterSpacing: 2,
    fontFamily: "Poppins_700Bold",
    textShadowColor: '#ffffff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 9,
  },
  motivation: {
    fontSize: 12,
    color: '#ffffff',
    letterSpacing: 1,
    fontFamily: "Poppins_700Bold",
    textAlign: "center"
  },
  Card: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
    marginBottom: 15,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
