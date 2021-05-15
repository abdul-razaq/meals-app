// This file contains the Navigation configuration for the Meals App
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from "../constants/Colors";

export default createAppContainer(
	createStackNavigator(
		{
			Categories: {
				screen: CategoriesScreen,
				navigationOptions: {
					headerTitle: "Meal Categories",
				},
			},
			CategoryMeals: {
				screen: CategoryMealsScreen,
			},
			MealDetails: MealDetailsScreen,
		},
		{
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor:
						Platform.OS === "android" ? Colors.primaryColor : "#fff",
				},
				headerTintColor:
					Platform.OS === "android" ? "#fff" : Colors.primaryColor,
			},
		}
	)
);
