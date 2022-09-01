import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className='content container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
