import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Jim");

    const changeName = () => {
        setName("John");
    };

    const add = () => {
        setCounter(count + 1);
    };

    const sub = () => {
        setCounter(count - 1);
    };

    return(
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={changeName}>change name</button>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
        </div>
    );  


}