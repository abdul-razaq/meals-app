// This file contains the Navigation configuration for the Meals App
import React from "react";

import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff",
	},
	headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
};

const MealsStackNavigator = createStackNavigator(
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
		// We can also set navigationOptions: {} here that will contain configurations related to this stack navigator itself, instead of defining it as an option in the TabNavigator screen mappings configuration
		// navigationOptions: {
		// 	tabBarIcon: tabInfo => {
		// 		return (
		// 			<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
		// 		);
		// 	},
		// },
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const FavoriteMealsStackNavigator = createStackNavigator(
	{
		Favorites: FavoriteMealsScreen,
		MealDetails: MealDetailsScreen,
	},
	{ defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
	Meals: {
		screen: MealsStackNavigator,
		// This navigationOptions belongs to the MealsStackNavigator itself that is used as a screen in the Tab Navigator and not the navigation options used for the screens within the MealsStackNavigator itself.
		navigationOptions: {
			tabBarLabel: "Meals",
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: Colors.primaryColor,
		},
	},
	Favorite: {
		screen: FavoriteMealsStackNavigator,
		// this navigationOptions contains configurations belonging to FavoriteMealsStackNavigator when it is used as a screen within TabNavigator...
		navigationOptions: {
			tabBarLabel: "Favorites",
			tabBarIcon: tabInfo => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: Colors.accentColor,
		},
	},
};

const MealsFavTabNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: "#fff",
				shifting: true,
				// If shifting is set to false, the tab navigation background color will not be applied, so we need to set the following...
				// shifting: false
				// barStyle: { backgroundColor: Colors.primaryColor }
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor,
				},
		  });

// We use the Tab Navigator as our root App Navigator, The Tab Navigator then uses other Navigator like the Stack Navigator
export default createAppContainer(MealsFavTabNavigator);
