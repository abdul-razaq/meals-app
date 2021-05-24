export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

// Action Creator Functions...
export function toggleFavorite(mealID) {
	return {
		type: TOGGLE_FAVORITE,
		payload: {
			mealID,
		},
	};
}

export function setFilters(filterSettings) {
	return {
		type: SET_FILTERS,
		payload: {
			filters: filterSettings,
		},
	};
}
