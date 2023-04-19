import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Coin from './Coin';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import Header from './Header';
import { VscSync } from "react-icons/vsc";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [PageNumber , setPageNumber] = useState(0);
  const [load, setLoad] = useState(false);
  const userPerPage = 10;

  const pageVisted = PageNumber * userPerPage;

const currency = "INR"; 

const fetchit = async ()=>{
    const { data } =await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`
      );

     
      setCoins(data)
     
}
  useEffect(() => {

fetchit();
    
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);

    
    setLoad(true);
    
  };
  
  const data = coins.slice(pageVisted,pageVisted + userPerPage);
  
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())||coin.symbol.toLowerCase().includes(search.toLowerCase())
);



 const pageCount = Math.ceil(coins.length / userPerPage);
 const changePage = ({selected})=>{
setPageNumber(selected);
 };


 const resetChange = ()=>{
  setLoad(false);
  setSearch('');
 
 };


  return (
    <>
    <Header state={true} />
    <div className='coin-main'  >
    <div className='coin-app'>
      <div className='coin-search'>
      
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search Currency/symbol'
          />
         <div className='icon' onClick={resetChange} >< VscSync/></div>
        </form>
 
        
      </div>


     
      {load? filteredCoins.map(coin => {
        return (
          <Link to={`/coins/${coin.id}` } style={{ textDecoration: 'none' }}><Coin
            key={coin.id}
           
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          /></Link>
        );
      }):data.map(coin => {
        return (
            <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none' }}><Coin
            key={coin.id}
            name={coin.name}
           
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          /></Link>
        );
      })}
<ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

    </div>
    </ div>
    </>
  );
}

export default Homepage;
