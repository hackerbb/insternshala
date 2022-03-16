import { number } from 'prop-types';
import React from 'react'
import { useState } from 'react'
var ptodo=[]
const Todo = ({ todo}) => {
    return (
        <div class="list" >
            <h2 className="h2">{todo}</h2>
        </div>
    );
};


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
function searchbar(e, setValue, todos, setTodos)
{   
    console.log(ptodo, e.target.value)
    if (ptodo.length != 0)
    {
        setTodos(ptodo)
        todos = ptodo
    }
    setValue(e.target.value);
    const newt = todos.filter((to, i) => {
    console.log(to, to.indexOf(e.target.value), e.target.value);
        if (to.indexOf(e.target.value) !== -1) {
        return 1;
    }});
    console.log(todos)
    ptodo = todos
    setTodos(newt);               
}
function Add(setTodos, todos)
{
    const  a = makeid(5);
    setTodos([...todos, a]);
    ptodo = [...ptodo, a];
}

function App(props) {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="main">
            <input type="text" placeholder='Search' onChange={(e) => { searchbar(e, setValue, todos, setTodos); }}  value={value} />
            <button className="Add" onClick={() => { Add(setTodos, todos); }}  > + </button>

            {todos.map((todol, index) => (
                <Todo key={index} todo={todol} />
            ))}
        </div>

    );
}



export default App