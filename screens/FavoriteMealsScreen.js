import React from "react";

import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import NoContent from "../components/NoContent";

export default function FavoriteMealsScreen(props) {
	const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

	const content =
		!favoriteMeals.length || !favoriteMeals ? (
			<NoContent>You have no favorite meals!</NoContent>
		) : (
			<MealList listData={favoriteMeals} navigation={props.navigation} />
		);

	return content;
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
