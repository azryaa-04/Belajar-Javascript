import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function Title() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 20 }}>Internet of Think</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Title/>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ea6df",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
