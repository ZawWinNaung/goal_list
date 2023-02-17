import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  function navigateToProfile() {
    navigation.navigate("Profile", { screen: "profile" });
  }

  const myIcon = <Icon name="user" size={16} color="white" />;

  const actions = [
    {
      text: "Add Goal",
      icon: require("../assets/images/goal.png"),
      name: "bt_addGoal",
      position: 1,
      color: "#5e0acc",
    },
    {
      text: "Profile",
      icon: myIcon,
      name: "bt_profile",
      position: 2,
      color: "#5e0acc",
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <GoalInput
          visible={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          <FloatingAction
            color="#5e0acc"
            actions={actions}
            onPressItem={(name) => {
              switch (name) {
                case "bt_addGoal":
                  startAddGoalHandler();
                  break;
                case "bt_profile":
                  navigateToProfile();
                  break;
              }
            }}
          />
          {/* <Pressable
            style={styles.fab}
            android_ripple={{ color: "#210644" }}
            onPress={startAddGoalHandler}
          >
            <Image
              style={styles.image}
              source={require("../assets/images/goal.png")}
            />
          </Pressable> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e065a",
  },
  goalsContainer: {
    flex: 5,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  image: {
    width: 30,
    height: 30,
  },
  fab: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 20,
    right: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 100,
  },
});
