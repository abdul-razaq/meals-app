import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MealDetailsScreen(props) {
	return (
		<View style={styles.screen}>
			<Text>The Meal Details Screen!</Text>

			<Button title="Go to categories!" onPress={() => props.navigation.popToTop()} />
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
