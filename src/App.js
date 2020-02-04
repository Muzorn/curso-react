import React, { Component } from 'react';
import Radium, {StyleRoot} from "radium";
import styled from 'styled-components';

import classes from './App.css';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserImput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: 'awfafaw11', name: 'Max', age: 28 },
      { id: 'awfafaw12', name: 'Manu', age: 29 },
      { id: 'awfafaw13', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Cocococococo',
    userName: 'Username State',
    showPersons: false,
    paragraph: {
      text: '',
      length: 0
    }
  };

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    // No hacer esto
    // this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [ // Sobreescribe persons ya que lo estamos definiendo de nuevo por completo
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  };

  deletePersonHandler = (personIndex) => {
    // Fetch all Persons
    const persons = this.state.persons;
    // Quitamos el elemento en index
    persons.splice(personIndex, 1);
    // Actualizamos el state
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative version
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons});
  };

  nameStateChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  outputLengthHandler = (event) => {
    const inputText = event.target.value;
    const inputTextLength = inputText.length;
    this.setState({paragraph: {text: inputText, length: inputTextLength}});
  };

  removeCharHandler = (index) => {
    // Recover paragraph object from state
    const paragraph = {...this.state.paragraph};
    // Split our paragraph text into single chars
    const paragraphText = [...paragraph.text];

    // Remove char at clicked position
    paragraphText.splice(index, 1);

    // Join our array of chars again into a single string and update it
    paragraph.text = paragraphText.join('');
    // Update string length
    paragraph.length = paragraphText.length;

    // Update state with the updated paragraph
    this.setState({paragraph: paragraph});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? ' salmon' : 'lightgreen'};
        color: black;
      }
    `;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {/*<Person*/}
            {/*    name={this.state.persons[0].name}*/}
            {/*    age={this.state.persons[0].age}*/}
            {/*/>*/}
            {/*<Person*/}
            {/*    name={this.state.persons[1].name}*/}
            {/*    age={this.state.persons[1].age}*/}
            {/*    changed={this.nameChangeHandler}>*/}
            {/*  My Hobbies: Racing*/}
            {/*</Person>*/}
            {/*<Person*/}
            {/*    name={this.state.persons[2].name}*/}
            {/*    age={this.state.persons[2].age}*/}
            {/*    click={this.switchNameHandler.bind(this, 'Max!')}*/}
            {/*/>*/}
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  name={person.name}
                  age={person.age} />
              </ErrorBoundary>
            })}
          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let btnClass = [classes.Button];
    btnClass.push(classes.Red);
    // let btnClass = [];

    //let assignedClasses = ['red', 'bold'].join(' '); // "red bold"

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red'); // assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold'); // assignedClasses = ['red', 'bold'] porque si vamos quitando uno a uno...
    }

    return (
        <StyleRoot>
          <div className={classes.App}>
            <header className={classes.AppHeader}>
              <img src={logo} className={classes.AppLogo} alt="logo" />
              <h1 className={classes.AppTitle}>Welcome to React</h1>
            </header>
            <h1 className={assignedClasses.join(' ')}>Hi, I'm a React App</h1>

            <hr/>

            <h1>Ejercicio de listas y cosas locas</h1>
            <input type="text" onChange={this.outputLengthHandler} value={this.state.paragraph.text}/>
            <p>Introduced text: {this.state.paragraph.text}</p>
            <p>Text length: {this.state.paragraph.length}</p>
            <Validation paragraph={this.state.paragraph}/>
            <p>Char list:</p>
            <ul>
              {[...this.state.paragraph.text].map((character, index) => {
                return <Char
                    key={index}
                    character={character}
                    click={() => this.removeCharHandler(index)}
                />
              })}
            </ul>
            <hr/>

            {/*<UserImput userName={this.state.userName} changed={this.nameStateChangeHandler}/>*/}
            {/*<UserOutput userName='Jesús'/>*/}
            {/*<UserOutput userName={this.state.userName}/>*/}
            {/*<UserOutput userName='Loco'/>*/}

            {/*className={btnClass.join(' ')}*/}
            <StyledButton
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
            {persons}
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
