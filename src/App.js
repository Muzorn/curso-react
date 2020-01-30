import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserImput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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
      cursor: 'pointer'
    };

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
              return <Person
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  key={person.id}
                  name={person.name}
                  age={person.age} />
            })}
          </div>
      );

      style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' '); // "red bold"

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold'] porque si vamos quitando uno a uno...
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h1 className={classes.join(' ')}>Hi, I'm a React App</h1>

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

        <UserImput userName={this.state.userName} changed={this.nameStateChangeHandler}/>
        <UserOutput userName='Jesús'/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName='Loco'/>

        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
