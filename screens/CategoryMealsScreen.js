import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";
import HeaderButton from "../components/HeaderButton";

function renderMealItem(itemData, navigation) {
	return (
		<MealItem
			item={itemData.item}
			onSelectMeal={() => {
				navigation.navigate({
					routeName: "MealDetails",
					params: {
						mealID: itemData.item.id,
					},
				});
			}}
		/>
	);
}

export default function CategoryMealsScreen(props) {
	const categoryID = props.navigation.getParam("categoryID");
	const categoryMeals = MEALS.filter(meal =>
		meal.categoryIds.includes(categoryID)
	);
	return (
		<View style={styles.screen}>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={categoryMeals}
				renderItem={itemData => renderMealItem(itemData, props.navigation)}
				style={{ width: "100%" }}
			/>
		</View>
	);
}

CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryID = navigationData.navigation.getParam("categoryID");
	const category = CATEGORIES.find(category => category.id === categoryID);
	return {
		headerTitle: category.title,
		headerRight: (
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
