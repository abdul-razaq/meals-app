import React from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import Colors from "../constants/Colors";

export default function CategoryMealsScreen(props) {
	const categoryID = props.navigation.getParam("categoryID");
	const category = CATEGORIES.find(category => category.id === categoryID);
	return (
		<View style={styles.screen}>
			<Text>The Category Meals Screen! {category.title}</Text>
			<Button
				title="GO TO MEAL DETAILS!"
				onPress={() => props.navigation.navigate({ routeName: "MealDetails" })}
			/>
			<Button title="Go back!" onPress={() => props.navigation.goBack()} />
			<Button title="Go back!" onPress={() => props.navigation.pop()} />
		</View>
	);
}

CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryID = navigationData.navigation.getParam("categoryID");
	const category = CATEGORIES.find(category => category.id === categoryID);
	return {
		headerTitle: category.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
