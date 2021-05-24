import React from "react";

import { View, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

export default function FavoriteMealsScreen(props) {
	const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

	const content =
		!favoriteMeals.length || !favoriteMeals ? (
			<View style={styles.defaultTextContainer}>
				<DefaultText>You have no favorite meals!</DefaultText>
			</View>
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

const styles = StyleSheet.create({
	defaultTextContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
