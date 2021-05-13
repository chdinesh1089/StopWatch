import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Container} from './time';
import { styles } from './styles';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stop Watch</Text>
      <Container />
      <StatusBar style="auto" />
    </View>
  );
}
