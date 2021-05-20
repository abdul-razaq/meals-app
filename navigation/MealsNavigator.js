// This file contains the Navigation configuration for the Meals App
import React from "react";

import { Text, Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff",
	},
	headerTitleStyle: {
		fontFamily: "open-sans-bold",
	},
	headerBackTitleStyle: {
		fontFamily: "open-sans-bold",
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
			tabBarLabel:
				Platform.OS === "android" ? (
					<Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
				) : (
					"Meals"
				),
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
			tabBarLabel:
				Platform.OS === "android" ? (
					<Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
				) : (
					"Favorites"
				),
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
				barStyle: { backgroundColor: Colors.primaryColor },
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					labelStyle: {
						fontFamily: "open-sans",
					},
					activeTintColor: Colors.accentColor,
				},
		  });

const FiltersScreenStackNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{ defaultNavigationOptions: defaultStackNavOptions }
);

const MainNavigator = createDrawerNavigator(
	{
		Categories: MealsStackNavigator,
		MealsFavs: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: "Favorite Meals",
			},
		},
		Filters: FiltersScreenStackNavigator,
	},
	{
		drawerBackgroundColor: "#ccc",
		hideStatusBar: true,
		contentOptions: {
			activeTintColor: Colors.accentColor,
			labelStyle: {
				fontFamily: "open-sans-bold",
			},
		},
	}
);

// We use the Drawer Navigator as our root App Navigator and no longer the Tab Navigator, The Drawer Navigator then uses other Navigator like the Stack and Tab Navigator internally
export default createAppContainer(MainNavigator);
