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

function renderGridItem(itemData, navigation) {
	let TouchableWrapper = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21)
		TouchableWrapper = TouchableNativeFeedback;
	return (
		<TouchableWrapper
			onPress={() =>
				navigation.navigate({
					routeName: "CategoryMeals",
					params: {
						categoryID: itemData.item.id,
					},
				})
			}
		>
			<View style={styles.gridItem}>
				<Text>{itemData.item.title}</Text>
			</View>
		</TouchableWrapper>
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

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});
