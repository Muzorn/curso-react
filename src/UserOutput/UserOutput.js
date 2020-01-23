import React from 'react';

const userOutput = (props) => {
  return (
      <div>
        <p>My username is: {props.userName}</p>
        <p>Paragraph 2</p>
      </div>
  );
};

export default userOutput;