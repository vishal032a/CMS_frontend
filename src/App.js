import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1 className='banner'>Content Listing site</h1>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
