import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	windowSize: {
		width: 0,
		height: 0,
	},
	currentSection: "home",
};

export const utilsSlice = createSlice({
	name: "utils",
	initialState,
	reducers: {
		setWindowSize: (state, action) => {
			return {
				...state,
				windowSize: action.payload,
			};
		},
		setCurrentSection: (state, action) => {
			return {
				...state,
				currentSection: action.payload,
			};
		},
	},
});

export const { setWindowSize, setCurrentSection } = utilsSlice.actions;

export default utilsSlice.reducer;
