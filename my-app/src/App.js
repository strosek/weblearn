import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Many', age: 108 },
      { name: 'Lucy', age: 26 }
    ],
  });

  const [ anotherState, setAnotherState ] = useState('anotherState');

  console.log(personsState, anotherState)

  const switchNameHandler = () => {
    console.log('Was clicked!')
    //this.state.persons[0].name = 'Erick'
    setPersonsState({
      persons: [
        { name: 'Dany', age: 28 },
        { name: 'Erick', age: 108 },
        { name: 'Sky', age: 26 }
      ],
    })
  }

  return (
    <div className="App">
      <h1>This is a React project.</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>Hobby: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
};

export default App;
