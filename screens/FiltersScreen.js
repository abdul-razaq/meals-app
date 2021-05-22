import React, { useState } from "react";
import { View, Text, Switch, Platform, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";

function filterSwitch(props) {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
				value={props.value}
				onValueChange={props.onValueChange}
			/>
		</View>
	);
}

export default function FiltersScreen(props) {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<filterSwitch
				label="Gluten-free"
				value={isGlutenFree}
				onValueChange={newValue => setIsGlutenFree(newValue)}
			/>
			<filterSwitch
				label="Lactose-free"
				value={isLactoseFree}
				onValueChange={newValue => setIsLactoseFree(newValue)}
			/>
			<filterSwitch
				label="Vegan"
				value={isVegan}
				onValueChange={newValue => setIsVegan(newValue)}
			/>
			<filterSwitch
				label="Vegetarian"
				value={isVegetarian}
				onValueChange={newValue => setIsVegetarian(newValue)}
			/>
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
	},
	filterContainer: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 15,
	},
	title: {
		fontFamily: "open-sans",
		fontSize: 22,
		textAlign: "center",
	},
});
