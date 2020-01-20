import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;