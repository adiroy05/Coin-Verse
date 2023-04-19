import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './components/src1/App1'
import CoinPage from './components/CoinPage';

ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>
   
    <Routes>

     <Route  exact path='/' element={<App />}/>
     <Route path='/exp' element={<App1 />}/>
     <Route path='/coins/:id' element={<CoinPage />}/>

</Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
