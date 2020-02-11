import React from 'react';

import './UserInput.css';

const userInput = (props) => {
  return (
      <div className="userInputContainer">
        <input onChange={props.changed} value={props.userName}/>
      </div>
  );
};

export default userInput;