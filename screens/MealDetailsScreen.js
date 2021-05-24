import React, { useEffect, useCallback } from "react";

import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavorite } from "../store/actions/meals";

const TextItem = props => {
	return (
		<View style={styles.textItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

export default function MealDetailsScreen(props) {
	const availableMeals = useSelector(state => state.meals.meals);

	const meal = availableMeals.find(
		meal => meal.id === props.navigation.getParam("mealID")
	);
	const isCurrentMealFavorite = useSelector(state =>
		state.meals.favoriteMeals.some(favMeal => favMeal.id === meal.id)
	);

	const dispatchFunction = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatchFunction(toggleFavorite(meal.id));
	}, [dispatchFunction, meal.id]);

	useEffect(() => {
		props.navigation.setParams({
			toggleFav: toggleFavoriteHandler,
		});
	}, [toggleFavoriteHandler]);

	useEffect(() => {
		props.navigation.setParams({
			isCurrentMealFav: isCurrentMealFavorite,
		});
	}, [isCurrentMealFavorite]);

	return (
		<View style={styles.screen}>
			<ScrollView>
				<Image source={{ uri: meal.imageUrl }} style={styles.image} />
				<View style={styles.details}>
					<DefaultText>{meal.duration}m</DefaultText>
					<DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
					<DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
				</View>
				<Text style={styles.title}>Ingredients</Text>
				{meal.ingredients.map(ingredient => (
					<TextItem key={ingredient}>{ingredient}</TextItem>
				))}
				<Text style={styles.title}>Steps</Text>
				{meal.steps.map(step => (
					<TextItem key={step}>{step}</TextItem>
				))}
			</ScrollView>
		</View>
	);
}

MealDetailsScreen.navigationOptions = navigationData => {
	const mealTitle = navigationData.navigation.getParam("mealTitle");
	const toggleFavorite = navigationData.navigation.getParam("toggleFav");
	const isCurrentMealFavorite =
		navigationData.navigation.getParam("isCurrentMealFav");

	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName={isCurrentMealFavorite ? "ios-star" : "ios-star-outline"}
					onPress={toggleFavorite}
				></Item>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: { flex: 1 },
	image: {
		width: "100%",
		height: 200,
	},
	textItem: {
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center",
		marginVertical: 15,
	},
	details: {
		flexDirection: "row",
		paddingHorizontal: 15,
		justifyContent: "space-around",
	},
});
