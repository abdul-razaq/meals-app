import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";

import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

function loadFonts() {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
}

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setFontLoaded(true)}
				onError={err => console.log(err)}
			/>
		);
	}
	return <MealsNavigator />;
}

const styles = StyleSheet.create({});
