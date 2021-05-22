import React from "react";

import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Button,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const TextItem = props => {
	return (
		<View style={styles.textItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

export default function MealDetailsScreen(props) {
	const meal = MEALS.find(
		meal => meal.id === props.navigation.getParam("mealID")
	);
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
