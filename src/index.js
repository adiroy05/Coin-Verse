import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import ExT from './components/EXT/ExT';
import CoinPage from './components/CoinPage';

ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>
   
    <Routes>

     <Route  exact path='/' element={<App />}/>
     <Route path='/exp' element={< ExT/>}/>
     <Route path='/coins/:id' element={<CoinPage />}/>

</Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
