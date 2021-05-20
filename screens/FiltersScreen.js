import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

export default function FiltersScreen(props) {
	return (
		<View style={styles.screen}>
			<Text>The Filters Screen!</Text>
		</View>
	);
}

FiltersScreen.navigationOptions = navigationData => {
	return {
		headerTitle: "Filter Meals...",
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
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
