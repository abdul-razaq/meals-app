import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { enableScreens } from "react-native-screens";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import * as Font from "expo-font";

import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
	meals: mealsReducer,
});
const store = createStore(rootReducer);

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
				onError={err => console.error(err)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}
