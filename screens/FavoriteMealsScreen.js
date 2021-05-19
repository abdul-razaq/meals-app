import React from "react";

import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";

export default function FavoriteMealsScreen(props) {
	const favoriteMeals = [];
	for (meal of MEALS) {
		if (meal.id === "m1" || meal.id === "m2") {
			favoriteMeals.push(meal);
		}
	}
	return <MealList data={favoriteMeals} navigation={props.navigation} />;
}

FavoriteMealsScreen.navigationOptions = {
	headerTitle: "Your Favorite Meals...",
};

