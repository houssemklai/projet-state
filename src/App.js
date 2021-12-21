import './App.css';
import React from 'react';
import Person from './person';
class App extends React.Component{
  constructor(){
    super()
    this.state={hk:true }
  }
  afichage =()=>{this.setState({hk:!this.state.hk  })}
  
  render(){
  return(
  <div>
    <button onClick={this.afichage}> {this.state.hk===true ?"show state" :"noo" }</button>
    {this.state.hk===true?<Person></Person>: null }
    
  </div>  

    
  )
}

}    

export default App;
