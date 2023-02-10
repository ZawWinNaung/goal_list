import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function starAddGoalHandler() {
    setModelIsVisible(true)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    })
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={starAddGoalHandler} />
      {modelIsVisible && <GoalInput onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5
  },
});
