import { createStore } from "redux";
import bookReducer from "./reducer";

// Create Redux store
const store = createStore(bookReducer);

export default store;
