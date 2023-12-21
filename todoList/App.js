import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View ,ActivityIndicator
} from 'react-native';
import React from 'react';
import Task from './components/Task/Task.js';

export default function App() {

  const [task, setTask] = React.useState()
  const [taskItems, setTaskItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask(null)
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]  
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }


  React.useEffect(() => {
    const loadData = async () => {
    
      await new Promise(resolve => setTimeout(resolve, 2500));

      setIsLoading(false);
    };

    loadData();
  }, []);
  return (
    <View style={styles.container}>

      {isLoading ? (
        <View style={styles.spinner}>
          <Text style={styles.loadingTitle}>Оrganize your day </Text>
          <ActivityIndicator size="large"  color="#55BCF6"/>
        </View>
      ) : (
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today`s tasks</Text>
          <View style={styles.items}>
            {taskItems.map((name, index) => (
              
                <Task key={index} text={name} completeTask={completeTask} index={index} />
              
            ))}
          </View>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
     borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  }
});
