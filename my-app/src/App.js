import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Many', age: 108 },
        { name: 'Lucy', age: 26 }
      ],
      otherState: 'some other value',
  }

  anotherState = {
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Daniel', age: 57 },
        { name: 'Flaca', age: 1 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Name', age: 28 },
        { name: event.target.value, age: 57 },
        { name: 'Flaca', age: 1 },
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Monkey')}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            change={this.nameChangedHandler}>Hobby: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React project.</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
