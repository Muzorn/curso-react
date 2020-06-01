import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold'] porque si vamos quitando uno a uno...
  }

  let list = [ 1, 2, 3 ]
      [ list[1], list[0] ] = [list[0], list[1]]
  console.log(list)

  return (
      <div className={classes.Cockpit}>
        <h1 className={assignedClasses.join(' ')}>Hi, I'm a React App</h1>
        <h2>{props.title}</h2>

        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default cockpit;