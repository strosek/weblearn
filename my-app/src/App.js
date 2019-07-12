import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Many', age: 108 },
        { name: 'Lucy', age: 26 }
      ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React project.</h1>
        <p>This is really working.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
