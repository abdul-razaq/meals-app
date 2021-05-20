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

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = navigationData => {
	return {
		headerTitle: "Meal Categories",
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
