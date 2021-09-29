export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const DELETE_TODO_TASK = 'DELETE_TODO_TASK';
export const DELETE_ALL_TODO_TASK = 'DELETE_ALL_TODO_TASK';
export const COMPLETE_TODO_TASK = 'COMPLETE_TODO_TASK';

export const add_todo_task_action = task => {
    return {
        type: ADD_TODO_TASK,
        payload: task
    }
}


export const delete_todo_task_action = task_id => {
    return {
        type: DELETE_TODO_TASK,
        payload: task_id
    }
}

export const delete_all_todo_task_action = ()=> {
    return {
        type: DELETE_ALL_TODO_TASK,
    }
}

export const complete_todo_task_action = task_id =>{
    return{
        type: COMPLETE_TODO_TASK,
        payload: task_id,
    }
}