import React from "react";

class Person extends React.Component{
state={person :{name:"houssem",bio:"Abed rahim", profission:"stagiére"},   value:0 }



     componentDidMount(){


      setInterval(() => {
        this.setState({value: this.state.value+1}) 
      }, 1000);
     
     }

    render(){
    return (
      <div>
     <h1> {this.state.person.name} </h1> <br/>
     <p>  {this.state.person.bio}  </p>  <br/>
     <p> {this.state.person.profission}   </p>   <br/>
     <img src={"https://tse1.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAHaHZ&pid=Api&P=0&w=300&h=300"}/>  
          <p>{this.state.value}</p>
 </div>
        
    )
  }
  
}    

  export default Person;
  