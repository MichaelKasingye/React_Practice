import React from 'react';
import './UserOutput.css';

const userOutput = (props)=>{
    return (
        <div className = "UserOutput">
            <p>USERNAME:{props.userName}</p>
            <p>This will be over written</p>
        </div>
    );
};
export default userOutput;