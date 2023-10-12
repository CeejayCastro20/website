import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Title from './login_portal/Title';
import Home from './admin_home/Home';
import Validation from './admin_dashboard/Validation';
import Request from './admin_dashboard/Request';
import Maker from './admin_dashboard/Maker';
import LPage from './pages/LPage.jsx';
import SAreq from './pages/SAreq.jsx';
import Freq from './pages/Freq.jsx';
import Facform from './pages/Facform.jsx';
import StAlform from './pages/StAlform.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Title/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Validation" element={<Validation/>}></Route>
        <Route path="/Request" element={<Request/>}></Route>
        <Route path="/ID_MAKER" element={<Maker/>}></Route>
        <Route path="/" element={<LPage/>} />
        <Route path="/student-request-form-note" element={<SAreq/>}/>
        <Route path="/alumni-request-form-note" element={<SAreq/>}/>
        <Route path="/faculty-request-form-note" element={<Freq/>}/>
        <Route path="/Faculty-Form" element={<Facform/>} />
        <Route path="/Student-Alumni-Form" element={<StAlform/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
