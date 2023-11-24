import { combineReducers } from "redux";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// tips reducer
import tips from "./tips.reducer";

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    tips, // contains tip data which as of 11/24/23 returns all tip data
});

export default rootReducer;
