import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

export default function mealsReducer(state = initialState, { type, payload }) {
	switch (type) {
		case TOGGLE_FAVORITE:
			const existingMealIndex = state.favoriteMeals.findIndex(
				meal => meal.id === payload.mealID
			);
			if (existingMealIndex !== -1) {
				const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingMealIndex, 1)
				return {
					...state,
					favoriteMeals: updatedFavoriteMeals,
				};
			}
			return {
				...state,
				favoriteMeals: state.favoriteMeals.concat(
					state.meals.find(meal => meal.id === payload.mealID)
				),
			};
		default:
			return state;
	}
}
