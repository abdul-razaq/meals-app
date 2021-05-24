import React from "react";

import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";
import NoContent from "../components/NoContent";

export default function CategoryMealsScreen(props) {
	const availableMeals = useSelector(state => state.meals.filteredMeals);

	const categoryMeals = availableMeals.filter(meal =>
		meal.categoryIds.includes(props.navigation.getParam("categoryID"))
	);
	const content = !availableMeals.length ? (
		<NoContent>
			No meals in this category! check your filter settings.
		</NoContent>
	) : (
		<MealList listData={categoryMeals} navigation={props.navigation} />
	);
	return content;
}

CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryID = navigationData.navigation.getParam("categoryID");
	const category = CATEGORIES.find(category => category.id === categoryID);
	return {
		headerTitle: category.title,
	};
};
