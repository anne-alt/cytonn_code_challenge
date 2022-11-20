import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import History from './components/History';
import Home from './components/Home';
import Navbar from './components/NavBar';



function App() {
  const[data, setData] = useState([])
  const [cases, setCases] = useState([])

  
        return(
        <div>
            <BrowserRouter>
            <Navbar/>
              <Routes>
                 <Route path="/History" element={<History cases={cases} setCases={setCases}/>} />
                 <Route path="/" element={<Home data={data} setData={setData}/>} />
             </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
