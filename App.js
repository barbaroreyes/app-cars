import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Image } from 'react-native';

const PlaceholderImage = require('./assets/corona.png');

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    fontWeight: 'bold',
    fontSize: '30px',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 128,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});
