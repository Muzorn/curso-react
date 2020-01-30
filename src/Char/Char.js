import React from 'react';
import './Char.css'

const char = (props) => {
  let character = props.character;
  return (
      <li className="Char" onClick={props.click}>{character}</li>
  )
};

export default char;