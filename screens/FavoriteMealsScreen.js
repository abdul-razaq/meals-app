import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavoriteMealsScreen(props) {
	return (
		<View style={styles.screen}>
			<Text>The Favorite Meals Screen!</Text>
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
