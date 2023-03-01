import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

export default function App() {
  const tasks = ['task 1','Task 2','Task3']
  return (
    <View style={styles.container}>
      <Header titulo="lista de tarefas" />
      <Header titulo="lista de alunos" />
      <Header titulo="lista de professores" />
      <View>
         {tasks.map((task) => (
          <Text>{task}</Text>
        ))}
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
});
