import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserImput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 'awfafaw11', name: 'Max', age: 28 },
      { id: 'awfafaw12', name: 'Manu', age: 29 },
      { id: 'awfafaw13', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Cocococococo',
    userName: 'Username State',
    showPersons: false
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

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [ // Sobreescribe persons ya que lo estamos definiendo de nuevo por completo
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
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

  render() {
    const style = {
      backgroundColor: 'white',
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
                  key={person.id}
                  name={person.name}
                  age={person.age} />
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h1>Hi, I'm a React App</h1>
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
