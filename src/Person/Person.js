import React from 'react';
import './Person.css';

const Person = (props) =>{
    return (
    <div className = "Person"><p onClick = {props.click}>I am {props.name},this is a random number_
        {Math.floor(Math.random() * 30)}.
am {props.age} years old</p>
<p>{props.children}</p>
<input type ="text" onChange = {props.changed} value = {props.name} />
</div>
)
};
export default Person;