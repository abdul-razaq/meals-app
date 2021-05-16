import React from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

function renderGridItem(itemData, navigation) {
	return (
		<CategoryGridTile
			item={itemData.item}
			onSelect={() => {
				navigation.navigate({
					routeName: "CategoryMeals",
					params: {
						categoryID: itemData.item.id,
					},
				});
			}}
		/>
	);
}

export default function CategoriesScreen(props) {
	return (
		<FlatList
			numColumns={2}
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={itemData => renderGridItem(itemData, props.navigation)}
		/>
	);
}

CategoriesScreen.navigationOptions = {
	headerTitle: "Meals Categories",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
