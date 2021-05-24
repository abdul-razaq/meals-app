import React from "react";
import { View, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

export default function NoContent(props) {
	return (
		<View style={styles.defaultTextContainer}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
}

const styles = StyleSheet.create({
	defaultTextContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
