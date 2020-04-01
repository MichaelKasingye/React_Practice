import React from 'react';

const userInput = (props) => {
    const Inputstyle = {
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid red',
        cursor:'pointer'
      };

    return <input type="text" 
    style = {Inputstyle}
    onChange = {props.changed}
    value = {props.currentName}/>
};
export default userInput;