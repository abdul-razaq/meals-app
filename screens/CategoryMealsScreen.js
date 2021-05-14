import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CategoryMealsScreen(props) {
	return (
		<View style={styles.screen}>
			<Text>The Category Meals Screen!</Text>
			<Button
				title="GO TO MEAL DETAILS!"
				onPress={() => props.navigation.navigate({ routeName: "MealDetails" })}
			/>
			<Button title="Go back!" onPress={() => props.navigation.goBack()} />
			<Button title="Go back!" onPress={() => props.navigation.pop()} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
