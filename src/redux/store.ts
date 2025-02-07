import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import utilsReducer from "./features/utils-slice";

//Step 1
const combinedReducer = combineReducers({
	utils: utilsReducer,
});

//eslint-disable-next-line
const rootReducer = (state: any, action: Action) => {
	if (action.type === "RESET") {
		//We are calling this RESET, but call what you like!
		state = {};
	}
	return combinedReducer(state, action);
};

const store = configureStore({
	reducer: {
		rootReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
