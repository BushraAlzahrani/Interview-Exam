import './App.css';
import axios from 'axios';
import React, { useState, useEffect} from 'react'

function App() {

  const[firstAmount, setFirstAmount] = useState(1);
  const[secondAmount, setSecondAmount] = useState(1);

  const[firstCurrency, setFirstCurrency] = useState('United Arab Emirates Dirham');
  const[secondCurrency, setSecondCurrency] = useState('Saudi Riyal');

  const [currencies ,setcurrencies]= useState([])
  


  useEffect (()=>{
    axios
    .get(`https://api.apilayer.com/fixer/symbols?apikey=5yKicDFJYOnlMBai7tyLJwh80yeA6qxm`)
    .then((res)=>{
        console.log(Object.values(res.data.symbols));
        setcurrencies(Object.values(res.data.symbols));
    })
    .catch((err)=>{
        console.log(err);
    })


},[])


useEffect (()=>{
  axios
  .get(`https://api.apilayer.com/fixer/convert?to=${secondCurrency}&from=${firstCurrency}&amount=40&apikey=5yKicDFJYOnlMBai7tyLJwh80yeA6qxm`)
  .then((res)=>{
      console.log(Object.values(res.data.symbols));
      setcurrencies(Object.values(res.data.symbols));
  })
  .catch((err)=>{
      console.log(err);
  })


},[firstCurrency, secondCurrency])


  return (
    <div className="App">

      <span>
      <input type="number" placeholder={firstAmount} onChange={(e)=>{setFirstAmount(e.target.value)}}></input>
      <select onChange={(e) => {
                  setFirstCurrency(e.target.value);}}>
                    
              {currencies.map((e) =>{
                        return <option value={e}>{e}</option>})}
            
       </select>
          
       {/* <select>
        <option>United Arab Emirates Dirham</option>
       </select> */}

                <br/>
                <br/>

       <input type="number" placeholder={secondAmount} onChange={(e)=>{setSecondAmount(e.target.value)}}></input>
      
      <select onChange={(e) => {
                  setSecondCurrency(e.target.value);}}>
                    
              {currencies.map((e) =>{
                        return <option value={e}>{e}</option>})}
            
       </select>

{/* <select>
        <option>Saudi Riyal</option>
       </select> */}

       <h4>{firstAmount} {firstCurrency}</h4>
       <h2>{secondAmount} {secondCurrency}</h2>
       </span>
    </div>
  );
}

export default App;
