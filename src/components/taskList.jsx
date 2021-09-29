import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { complete_todo_task_action, delete_all_todo_task_action, delete_todo_task_action } from '../redux/actions/todoTaskActions';

const TaskList = () => {
    const todos = useSelector((state) => state.task);
    const dispatch = useDispatch();

    return (
        <>
            <ul>
                {todos.length >= 1 &&

                    todos.map((todo) => {

                        return (

                            <li className={todo && todo.completed ? 'done' : null} onClick={() => dispatch(complete_todo_task_action(todo.id))} key={todo.id}>
                                <span>
                                    {todo.title}
                                </span>
                                <button onClick={() => {dispatch(delete_todo_task_action(todo.id))}}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
            </ul>

            <button className="clearAll" onClick={() => {dispatch(delete_all_todo_task_action())}}>
                Clear all
            </button>
        </>
    )
}

export default TaskList;
