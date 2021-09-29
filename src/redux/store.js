import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todo_task from "./reducers/todoTaskReducer";

const store = createStore(todo_task, composeWithDevTools());

export default store;