import './App.css';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import CollectionDemo from './CollectionDemo';
//React Components they return one JSX Element
function App() {
  return (
    <div className='App'>
      <AppHeader/>
      <p>Simple Demo</p>
      <CollectionDemo/>
      <AppFooter data="Some content from the Parent"/>
    </div>
  );
}

export default App;
