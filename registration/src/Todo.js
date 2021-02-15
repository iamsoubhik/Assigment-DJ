import React from 'react';
import fire from './fire';

export default function Todo({todo}) {
    const deleteTodo = () =>{
        const itemRef=fire.database().ref("Items").child(todo.id);
        itemRef.remove();
    }
    return (
        <div>
            <h1>{todo.title}</h1>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}