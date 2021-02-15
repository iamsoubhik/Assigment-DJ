import React,{useState} from 'react';
import fire from './fire';

const Input = () => {
    const[title,setTitle] = useState('');
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };
    const createItem = () => {
        const itemRef= fire.database().ref("Items");
        const item = {
            title,
            complete:false,
        };

        itemRef.push(item);
    };
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createItem}>ADD+</button>
        </div>
    )
}

export default Input;
