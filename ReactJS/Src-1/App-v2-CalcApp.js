import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Calc from './Calc';
//In react, U can create 2 kinds of Components: Functional Components and State Components. Functional Components are small and will have mainly a function that renders some static content. 
//State Components are based on Class architecture where U extend a class called React.Component and will have properties, functions and events. 
//header Component
//content Component
//footer Component

//A React Component is a class that extends React.Component. 
//It must override/implement the render() method. the method must return a JSX(JS + XML) object
class App extends Component{
  onClickFunc(){
    alert("Button is clicked");
  }
  render(){
    return (
      <div>
        <AppHeader/>
        <Calc/>
        <AppFooter company = "Google Inc" year = "2019"/>
      </div>
    )
  }
}

export default App; 
