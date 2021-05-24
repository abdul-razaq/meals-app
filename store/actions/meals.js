export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export function toggleFavorite(mealID) {
	return {
		type: TOGGLE_FAVORITE,
		payload: {
			mealID,
		},
	};
}
