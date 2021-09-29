import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo_task_action } from '../redux/actions/todoTaskActions';

const AddTask = () => {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const sending = (e) => {
        if (e.key === 'Enter') {

            const newTask = {
                id: Date.now(),
                title: task,
                completed: false
            }
            dispatch(add_todo_task_action(newTask));
            
        }

    }

    return (
        <>
            <input type="text"
                placeholder="What needs to be accomplished today?"
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={sending} />
        </>
    )
}

export default AddTask;
