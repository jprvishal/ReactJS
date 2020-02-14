import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = (props) => {

  const [personState, setPersonState] = useState({ 
      person: [
        { name: "Vishal", age:43 },
        { name: "Varshita", age: 37},
        { name: "Dhruvi", age: 13},
        { name: "Vrati", age: 12}
      ]
    }
  );

  const [otherState, setOtherState] = useState({
    otherState: "This is other state."
  });

  console.log(personState, otherState);

  const changeOtherState = () => {
    setOtherState({
      otherState: "This is other state, with some change."
    });
  };

  const switchNameHandler = () => {
    console.log("Switch Names Clicked...");

    //this.state.person[0].name = "Vishal Sharma";
    setPersonState({person: [
     { name: "Vishal Sharma", age:43 },
     { name: "Varshita", age: 37},
     { name: "Dhruvi", age: 13},
     { name: "Vrati", age: 12.5}
   ]}
   ); 

   changeOtherState();
 };

    return (
      <div className="App">
        <p>
          <h2>Hi this is React App, <br/>One more thing don't forget to say Hi to Vishal!</h2>
        </p>
        <br/><br/>
        <button onClick={switchNameHandler}>Switch Names</button>
        <br/>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}/>
        <Person name={personState.person[2].name} age={personState.person[2].age}>I will be in High School this summer!</Person>
        <Person name={personState.person[3].name} age={personState.person[3].age}/>
      </div>
    );

    //return React.createElement('div', {className: App}, 'h1', 'Hi, this is using createElement!');
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is using createElement!'));
  
}

export default app;
