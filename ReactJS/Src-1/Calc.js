import React, { Component, Fragment } from 'react'
//refs are used for interacting with input elements of the REACT DOM. It is used for txt selections, managing focuses of the elements and many more. 
export default class Calc extends Component {
    state = { result : 0 }//State contains the info that needs to be saved for multiple actions.
    constructor(){
        super();
        this.firstValue = React.createRef();//refs are the way to store input values
        this.secondValue = React.createRef();
        this.operand = React.createRef();
        this.onCalculate = this.onCalculate.bind(this);//Event binding to the components will happen with this function. 
    }

   onCalculate(ev){
        const v1 = parseFloat(this.firstValue.current.value)
        const v2 = parseFloat(this.secondValue.current.value)
        const operand = this.operand.current.value;
        let res = 0.0;
       switch (operand) {
           case "+":
               res = v1 + v2;
               break;
           case "-":
               res = v1 - v2;
               break;
           case "X":
               res = v1 * v2;
               break;
           case "/":
               res = v1 / v2;
               break;
       }
       this.setState({result : res});//used to set values to the objects of the state
       ev.preventDefault();
   }  

  render() {
    return (
      <Fragment>
        <h2>My Calc Program</h2>
        <p>
            <input ref={this.firstValue} placeholder='First value'/>
            <select ref={this.operand}>
                <option>+</option>
                <option>-</option>
                <option>X</option>
                <option>/</option>
            </select>
            <input ref={this.secondValue} placeholder='Second value'/>
            <button onClick={this.onCalculate}>Calculate</button>
            <span>Result: {this.state.result}</span>
        </p>
      </Fragment>
    )
  }
}
