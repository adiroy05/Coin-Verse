
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import './coinPage.css';



const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
 const [lol,setLol] = useState(false);


 const fetchcoin = async ()=>{
try{
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    setCoin(data);
}
catch(err)
{
    console.log(err);
}
 }
  

  useEffect(() => {

    fetchcoin();


   
   
  }, []);

 
 setTimeout(()=>{
    setLol(true);
 },1500);




  const currency="INR";
  
  return (
    <>
    <Header state={true} />
    {(lol ? <>
    
    <div className="container">
      <div className="sidebar">
        <img
      
          src={ coin.image.large}
          alt={`click here to  get data`}
          height="200"
          width="200"
          style={{ marginBottom: 20 }}
        />

       
        <h3 className="heading">
         <span  className="mainhead" >
          {coin.name}
          </span>
        </h3>
        <p className="description">
        
        </p>
        <div className="marketData">
          <span style={{ display: "flex" }}>
            <h5 className="heading">
              Rank: 
            </h5>
            &nbsp; &nbsp;
            <h5
              style={{
                fontFamily: "Montserrat",
                fontSize:"20px"
              }}
            >
              {coin?.market_cap_rank} <span style={{
                fontFamily: "Montserrat",
                fontSize:"10px"
              }} >(among top 201 coins)</span>
            </h5>
          </span>

          <span style={{ display: "flex" }}>
            <h5 className="heading">
              Current Price:
            </h5>
            &nbsp; &nbsp;
            <h5
              style={{
                fontFamily: "Montserrat",
                fontSize:"20px"
              }}
            >
             ₹{coin.market_data.current_price[currency.toLowerCase()].toLocaleString()}
            </h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5 className="heading">
              Market Cap:
            </h5>
            &nbsp; &nbsp;
            <h5
              style={{
                fontFamily: "Montserrat",
                fontSize:"20px"
              }}
            >
             ₹{ coin.market_data.market_cap[currency.toLowerCase()]
                  .toLocaleString()
                  .slice(0, -6)} Lakhs 
            </h5>
          </span>
        </div>
      </div>
      
    </div> </> : <p>Loading...</p> )}
    </>
  );
};

export default CoinPage;
