import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        value : '',
        NumberArray : [5,9,5,2,1],
        ArrayLength : ''
    }
  }

  handleInput = (event) => {
    this.setState({value : event.target.value})
    console.log("value",event.target.value);
  }
  
  handleSubmit = () => {
    let {value} = this.state;

    let concatePattern = "";
    for(let i=1; i<=value; i++)
    {
      for(let j=1; j<=i; j++)
      {
        concatePattern = concatePattern.concat("*");        
      }
      concatePattern = concatePattern.concat("\n");  
    }
    console.log(concatePattern);


    // Pattern 2

    for(let i=1; i<=value; i++)
    {
      let k = i;
      for(let j=1; j<=i; j++, k++)
      {
        var char = "";
        if(i == 1){
          char = String.fromCharCode(65);
        }
        else{
          char = String.fromCharCode(k + 65);
        }
        concatePattern = concatePattern.concat(char);        
      }
      concatePattern = concatePattern.concat("\n");  
    }
    console.log(concatePattern);

//pattern 3


    var t = 1;

    for (var i = 1; i <= 6; i++) {
      concatePattern = concatePattern.concat('\n');

      for (var c = 1; c <= 6 - i; c++) {
        concatePattern = concatePattern.concat(' ');
      }
      t = i;
      for (var j = 1; j <= i; j++) {
        concatePattern = concatePattern.concat(t);
        if (j > 1) {
          concatePattern = concatePattern.concat(t - 1);
        }
        t++;
      }
    }
    console.log(concatePattern);
    
  }
  
       
  render() {
    let {value} = this.state;
    return (
      <div>
        <input type = "text" name = "value" placeholder = "Enter Number" onChange = {this.handleInput}></input>
        <button onClick = {this.handleSubmit}>Submit</button>
        <h1>{value}</h1>
       
             
      </div>
    )
  }
}

export default App;







