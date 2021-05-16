import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	StyleSheet,
} from "react-native";

export default function CategoryGridTile(props) {
	let TouchableWrapper = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21)
		TouchableWrapper = TouchableNativeFeedback;
	return (
		<TouchableWrapper onPress={props.onSelect}>
			<View style={{ ...styles.gridItem, backgroundColor: props.item.color }}>
				<Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
			</View>
		</TouchableWrapper>
	);
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 15,
    overflow: "hidden",
		justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
		shadowColor: "#000",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 6,
	},
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  }
});
