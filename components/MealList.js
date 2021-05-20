import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

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

export default function MealList(props) {
	return (
		<View style={styles.list}>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={props.listData}
				renderItem={itemData => renderMealItem(itemData, props.navigation)}
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
