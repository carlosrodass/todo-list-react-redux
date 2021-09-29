import { ADD_TODO_TASK, DELETE_TODO_TASK, DELETE_ALL_TODO_TASK, COMPLETE_TODO_TASK } from "../actions/todoTaskActions";


const localList = localStorage.getItem("todos");
const local = JSON.parse(localList);

const default_task_state = {
    task: local
}


const todo_task = (state = default_task_state, action) => {

    switch (action.type) {

        case ADD_TODO_TASK: {

            if (state.task) {

                localStorage.setItem("todos", JSON.stringify([...state.task, action.payload]));
                return {
                    task: [...state.task, action.payload]
                }
            } else {
                return {
                    task: [action.payload]
                }
            }

        }

        case DELETE_TODO_TASK: {

            const deleting = state.task.filter((ele) => ele.id !== action.payload);

            localStorage.setItem("todos", JSON.stringify(deleting));

            return {
                ...state,
                task: deleting
            }
        }

        case DELETE_ALL_TODO_TASK: {

            localStorage.clear();

            return {
                ...state,
                task: []
            }
        }

        case COMPLETE_TODO_TASK: {

            const element = state.task.filter((ele) => ele.id === action.payload);

            if (element.length > 0) element[0].completed ? element[0].completed = false : element[0].completed = true;

            localStorage.setItem("todos", JSON.stringify([...state.task]));

            return {
                ...state,
                task: [...state.task]
            }
        }

        default: return state;
    }
}

export default todo_task;