import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const apiUrl = Constants.expoConfig.extra.apiUrl;
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! "{apiUrl}"</Text>
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
});
