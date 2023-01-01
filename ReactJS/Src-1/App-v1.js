import logo from './logo.svg';
import './App.css';

function App() {

  const headerText = "Welcome to React training";//variable to display the text
  const contentText = "Main part of the Component"
  
  const names = ['Phaniraj', 'Vinod Kumar', 'Banu Prakash', 'Ramnath Nishad', 'Brijesh Mishra', 'Sandy Pant', 'JoyDip Mondal'] //Data from a server..
  //refer the variable in the V-DOM using {}
  const namesJx = names.map((name, index)=> <li>{name}</li>)
  return (
    <div>
      <h1>{headerText}</h1>
      <hr />
      <section>
        <h2>{contentText}</h2>
        <hr/>
        <h2>List of Trainers for JavaScript Technologies</h2>
        <ul>{namesJx}</ul>
      </section>
    </div>
  );
}

export default App;//U R creating one UI Component called App. We will create many such UI Components. 
