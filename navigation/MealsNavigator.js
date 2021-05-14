// This file contains the Navigation configuration for the Meals App
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

export default createAppContainer(
	createStackNavigator({
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetails: MealDetailsScreen,
	})
);
