import { createStore } from "redux";
import covidReducer from "./Reducer";

const store = createStore(covidReducer)

export default store