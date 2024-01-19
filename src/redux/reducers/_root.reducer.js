import { combineReducers } from "redux";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// errors reducer
import errors from "./errors.reducer";
// errors reducer
import user from "./user.reducer";
// tips reducer
import tips from "./tips.reducer";
// employees reducer
import employees from "./employees.reducer";

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
	errors, // contains registrationMessage and loginMessage
	user, // will have an id and username if someone is logged in
	tips, // contains tip data which as of 11/24/23 returns all tip data
	employees, // gets employees from DB
});

export default rootReducer;
