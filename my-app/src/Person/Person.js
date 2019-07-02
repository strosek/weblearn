import React from 'react';
import './Person.css';

const person = () => {
  return (
    <p>I'm a person, {Math.floor(Math.random() * 30)} years old.</p>
  );
}

export default person;
