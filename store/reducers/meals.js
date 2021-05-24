import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

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
				updatedFavoriteMeals.splice(existingMealIndex, 1);
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
		case SET_FILTERS:
			const { filters } = payload;
			const filteredMeals = state.meals.filter(meal => {
				if (filters.glutenFree && !meal.isGlutenFree) return false;
				if (filters.lactoseFree && !meal.isLactoseFree) return false;
				if (filters.vegan && !meal.isVegan) return false;
				if (filters.vegetarian && !meal.isVegetarian) return false;
				return true;
			});
			return { ...state, filteredMeals };
		default:
			return state;
	}
}
