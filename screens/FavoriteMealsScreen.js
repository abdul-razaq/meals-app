import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

export default function FavoriteMealsScreen(props) {
	const favoriteMeals = MEALS.filter(
		meal => meal.id === "m1" || meal.id === "m2"
	);
	return <MealList listData={favoriteMeals} navigation={props.navigation} />;
}

FavoriteMealsScreen.navigationOptions = navigationData => {
	return {
		headerTitle: "Your Favorite Meals...",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Meals"
					iconName="ios-menu"
					onPress={() => navigationData.navigation.toggleDrawer()}
				></Item>
			</HeaderButtons>
		),
	};
};
