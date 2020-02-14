import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = { 
    person: [
      { name: "Vishal", age:43 },
      { name: "Varshita", age: 37},
      { name: "Dhruvi", age: 13},
      { name: "Vrati", age: 12}
    ]
  };

  switchNameHandler = () => {
     console.log("Switch Names Clicked...");

     //this.state.person[0].name = "Vishal Sharma";
     this.setState({person: [
      { name: "Vishal Sharma", age:43 },
      { name: "Varshita", age: 37},
      { name: "Dhruvi", age: 13},
      { name: "Vrati", age: 12.5}
    ]}
    ); 
     
  };

  render() {
    return (
      <div className="App">
        <p>
          <h2>Hi this is React App, <br/>One more thing don't forget to say Hi to Vishal!</h2>
        </p>
        <br/><br/>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <br/>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>I will be in High School this summer!</Person>
        <Person name={this.state.person[3].name} age={this.state.person[3].age}/>
      </div>
    );

    //return React.createElement('div', {className: App}, 'h1', 'Hi, this is using createElement!');
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is using createElement!'));
  }
}

export default App;
