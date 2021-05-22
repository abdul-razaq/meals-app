import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	StyleSheet,
	ImageBackground,
} from "react-native";

import DefaultText from "./DefaultText";

export default function MealItem(props) {
	let TouchableWrapper = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21)
		TouchableWrapper = TouchableNativeFeedback;
	return (
		<View style={styles.mealItem}>
			<TouchableWrapper onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.item.imageUrl }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.item.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetails }}>
						<DefaultText>{props.item.duration}m</DefaultText>
						<DefaultText>{props.item.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.item.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableWrapper>
		</View>
	);
}

const styles = StyleSheet.create({
	mealRow: {
		flexDirection: "row",
	},
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		overflow: "hidden",
		marginVertical: 10,
	},
	titleContainer: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	mealHeader: {
		height: "85%",
	},
	mealDetails: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		// we set height to 15%, so that the alignItems: center config is respected and is applied.
		height: "15%",
	},
});
