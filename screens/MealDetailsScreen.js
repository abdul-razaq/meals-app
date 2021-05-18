import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";

import HeaderButton from "../components/HeaderButton";

export default function MealDetailsScreen(props) {
	const meal = MEALS.find(
		meal => meal.id === props.navigation.getParam("mealID")
	);
	return (
		<View style={styles.screen}>
			<Text>The Meal Details Screen!</Text>

			<Button
				title="Go to categories!"
				onPress={() => props.navigation.popToTop()}
			/>
		</View>
	);
}

MealDetailsScreen.navigationOptions = navigationData => {
	const meal = MEALS.find(
		meal => meal.id === navigationData.navigation.getParam("mealID")
	);
	return {
		headerTitle: meal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {
						console.log("Mark as favorite!");
					}}
				></Item>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
