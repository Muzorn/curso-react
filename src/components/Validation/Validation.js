import React from 'react';

const validation = (props) => {
  let paragraph = props.paragraph;
  let minLength = 5;
  let textInfo = 'Text is too short';

  if (paragraph.length >= minLength) {
    textInfo = 'Text is long enough';
  }

  return (
      <p>{textInfo}</p>
  )
};

export default validation;