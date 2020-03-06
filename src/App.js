import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons:[
      {name:'Mike', age:29},
      {name:'Mark', age:22},
      {name:'Jane', age:25}
    ]
  }
  switchNameHandler = (newName) =>{
    //console.log('was clicked');
    this.setState({
      persons:[
        {name:newName, age:29},
        {name:'Mark', age:22},
        {name:'Jane Gabba', age:27}
      ]
    })
  }

  nameChangedHandler = (event) =>{
      this.setState({
      persons:[
        {name:'Michael', age:29},
        {name:'Mark', age:22},
        {name:event.target.value, age:27}
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor:'grey',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer'
    };

    return (
      <div className="App">
      <h1>Hello this is a react app</h1>
      {/* <Person name = "Mike" age = "29"/>
      <Person name = "Mark" age = "2 ">
        My hobbies: Racing
      </Person>
      <Person name = "Jane" age = "25"/>  */}
      <button
      style = {style}
      onClick ={this.switchNameHandler.bind(this,'Kasingye')} >Switch Name</button>
      <Person
       name = {this.state.persons[0].name}
        age = {this.state.persons[0].age}/>
      <Person
       name = {this.state.persons[1].name} 
       age = {this.state.persons[1].age}
       click ={this.switchNameHandler.bind(this,'E_M_Kasingye')}> Click me above <br></br> My hobbies: Racing
      </Person>
      <Person
       name = {this.state.persons[2].name}
        age = {this.state.persons[2].age}
        changed = {this.nameChangedHandler}/>

      </div>
    );
  }
}

export default App;
