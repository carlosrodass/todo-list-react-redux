import { ADD_TODO_TASK, DELETE_TODO_TASK, DELETE_ALL_TODO_TASK, COMPLETE_TODO_TASK } from "../actions/todoTaskActions";


const default_task_state = {
    task: []
}


const todo_task = (state = default_task_state, action) => {

    switch (action.type) {

        case ADD_TODO_TASK: {
            return {
                task: [...state.task, action.payload]
            }
        }

        case DELETE_TODO_TASK: {

            const deleting = state.task.filter((ele) => ele.id !== action.payload)

            return {
                ...state,
                task: deleting
            }
        }

        case DELETE_ALL_TODO_TASK: {
 
            return {
                ...state,
                task:[]
            }
        }

        case COMPLETE_TODO_TASK: {
            return {
                ...state,
            }
        }

        default: return state;
    }
}

export default todo_task;