import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  return (
      <div className="userOutputContainer">
        <p>My username is: {props.userName}</p>
        <p>Paragraph 2</p>
      </div>
  );
};

export default userOutput;