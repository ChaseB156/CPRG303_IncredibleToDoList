import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

export default function ToDoList() {
  // tasks
  const tasks = [
    { id: '1', text: 'Do laundry', completed: true },
    { id: '2', text: 'Go to gym', completed: false },
    { id: '3', text: 'Walk dog', completed: true },
  ];

  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
