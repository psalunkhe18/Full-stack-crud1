import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<CodeforInterview/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
