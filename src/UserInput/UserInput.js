import React from 'react';

const userInput = (props) => {
  return (
      <div>
        <input onChange={props.changed} value={props.userName}/>
      </div>
  );
};

export default userInput;