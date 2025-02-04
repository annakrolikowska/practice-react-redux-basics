import React from 'react';
import { removeAllUsers} from '../src/libs/actions'
import { useDispatch } from 'react-redux';

const Task05 = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeAllUsers())
    }

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleClick}>remove all users</button>
        </section>
    );
}

export default Task05;

