import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/add-event' element={ <AddEvent /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
