import React, { useState } from 'react'
import './header.css';
import {Link} from 'react-router-dom'
const Header = ({ state }) => {

  const [tempstate , setTempState ] = useState(state);



  return (
    <div className='headingMain'>
      <Link to='/' style={{ textDecoration: 'none' }}><h1 className='coin-text' onClick={()=>{setTempState(true)}} >CoinVerse</h1></Link>
        {tempstate && <Link to='/exp' style={{ textDecoration: 'none' }}><h4 className='coin-get'> Use Expense Tracker</h4></Link>}
    </div>
  )
}

export default Header;
