import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react'

function App() {

  const[amount, setAmount] = useState();
  const [conversionResult, setConversionResult] = useState();

  const[firstCurrency, setFirstCurrency] = useState('AED');
  const[secondCurrency, setSecondCurrency] = useState('SAR');


  const [currencies ,setcurrencies]= useState([])
  
  
  


  useEffect (()=>{
    axios
    .get(`https://api.apilayer.com/fixer/symbols?apikey=7XQ6wzDAAxNX6dkt8Us3NlZbtZ9SCaPb`)
    .then((res)=>{
        console.log(Object.keys(res.data.symbols));
        setcurrencies(Object.keys(res.data.symbols));
    })
    .catch((err)=>{
        console.log(err);
    })


},[])


useEffect (()=>{
  axios
  .get(`https://api.apilayer.com/fixer/convert?to=${secondCurrency}&from=${firstCurrency}&amount=${amount}&apikey=7XQ6wzDAAxNX6dkt8Us3NlZbtZ9SCaPb`)
  .then((res)=>{
      console.log(res.data.result);
      setConversionResult(res.data.result);
  })
  .catch((err)=>{
      console.log(err);
  })


},[amount,firstCurrency, secondCurrency])


  return (
    <div className="App">

      <span>
      <input type="number" placeholder={amount} onChange={(e)=>{setAmount(e.target.value)}}></input>
      <select onChange={(e) => {
                  setFirstCurrency(e.target.value);}}>
                    
              {currencies.map((e) =>{
                        return <option value={e}>{e}</option>})}
            
       </select>
          
                <br/>
                <br/>

       <input type="number" placeholder={conversionResult} ></input>
      
      <select onChange={(e) => {
                  setSecondCurrency(e.target.value);}}>
                    
              {currencies.map((e) =>{
                        return <option value={e}>{e}</option>})}
            
       </select>


       <h4>{amount} {firstCurrency}</h4>
       <h2>{conversionResult} {secondCurrency}</h2>
       </span>
    </div>
  );
}

export default App;
