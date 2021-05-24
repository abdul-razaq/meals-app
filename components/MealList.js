import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import MealItem from "./MealItem";

function renderMealItem(itemData, favoriteMeals, navigation) {
	const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

	return (
		<MealItem
			item={itemData.item}
			onSelectMeal={() => {
				navigation.navigate({
					routeName: "MealDetails",
					params: {
						mealID: itemData.item.id,
						mealTitle: itemData.item.title,
						isCurrentMealFav: isFavorite,
					},
				});
			}}
		/>
	);
}

export default function MealList(props) {
	const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

	return (
		<View style={styles.list}>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={props.listData}
				renderItem={itemData =>
					renderMealItem(itemData, favoriteMeals, props.navigation)
				}
				style={{ width: "100%" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
});
