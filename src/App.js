import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  const persons = [
    {
      firstName: "Carito",
      lastName: "Da Silva",
      age: 37,
      hair: "brown"
    },
    {
      firstName: "Mima",
      lastName: "Hernandez",
      age: 50,
      hair: "blondie"
    },
    {
      firstName: "Mitzuro",
      lastName: "Calzadilla",
      age: 14,
      hair: "brown"
    }

  ]
  

  return (
    <div className="App">
      {persons.map((person, i) => {
        return (
          <PersonCard key={i} firstName={person.firstName} lastName={person.lastName}
          age={person.age} hair={person.hair}/>

        )
      } )}
    </div>
  );
}

export default App;
