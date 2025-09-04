import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  // The code below will display my BioSketch @ UC, and it's amazing!!!!! 
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      {`Sindhuja Martha
Student ID: 35378`}  
      </Text>
      <Image style={styles.logo} source={require('../assets/sindhuja.jpeg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
