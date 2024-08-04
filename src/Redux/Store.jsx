import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombineReduser from "./Reducer/CombineReduser";

const MyStore = createStore(CombineReduser,composeWithDevTools())

export default MyStore;