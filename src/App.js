import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Cocococococo'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // Como no es una clase, sino una función, no podemos usarlo sin variable
  // También estamos definiendo una función dentro de otra función
  const switchNameHandler = () => {
    console.log('Was clicked!');
    // No hacer esto
    // personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [ // Sobreescribe persons ya que lo estamos definiendo de nuevo por completo
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
  );
};

export default App;
