import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

export default function CategoryMealsScreen(props) {
	const categoryMeals = MEALS.filter(meal =>
		meal.categoryIds.includes(props.navigation.getParam("categoryID"))
	);
	return <MealList listData={categoryMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryID = navigationData.navigation.getParam("categoryID");
	const category = CATEGORIES.find(category => category.id === categoryID);
	return {
		headerTitle: category.title,
	};
};
