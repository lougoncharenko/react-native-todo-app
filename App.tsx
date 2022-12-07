import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState<string>('')
  const [taskItems, setTaskItems] = useState<string[]>([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    //resets task in input value
    setTask('')
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style= {styles.taskWrapper}>
        <Text style= {styles.sectionTitle}> Today's Tasks</Text>
        <Task taskname = 'task 1' />
        <View style= {styles.items}>
          {taskItems.map((item, index) =>  {
            return ( 
              <TouchableOpacity onPress={() => completeTask(index)}>
                      <Task key={index} taskname={item}></Task>
              </TouchableOpacity>
            )
          })}
        </View>
      
      </View>
      <StatusBar style="auto" />

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput style= {styles.input} 
      placeholder= 'Add a task'
      value= {task}
      onChangeText = {text => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask} >
        <View>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
   items: {
    marginTop: 25,
   },
   input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
   },
    addWrapper:  {

    }
});
