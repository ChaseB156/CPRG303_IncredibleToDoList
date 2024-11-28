import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#8B4513',
    backgroundColor: '#004d00',
  },
  taskText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default ToDoList;
