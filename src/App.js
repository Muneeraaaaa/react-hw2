import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';

function App() {

const [img,setimge]=useState('')
const [price,setprice]=useState('');
const [input,setinput]=useState('');
const [details,setdetails]=useState('');
const[rank,setrank]=useState('');
const [name,setname]=useState('Bitcoin');
const [symbol,setsymbol]=useState('btc')

// `https://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`
// useEffect(( )=> {
//   const fetchCurencyData=async()=>{
//     const request=await fetch(`https://api.coincap.io/v2/assets/${name}`);
//     const data=await request.json();
//     setrank(data.rank)
//     setname()
    
//   };
// fetchCurencyData();
// },[]);

useEffect(( )=> {
  const fetchCurencyData=async()=>{
  const request=await fetch(`https://api.coincap.io/v2/assets`);
  const requests=await request.json();

  const highestten=requests.data((la)=>{

    return{
    value:la.rank,
    label:la.symbol
    };
  });

  console.log(data);
    };
  fetchCurencyData();
  },[]);
  









  return (
    <div className="container text-center">
  <div className="row">
    <div className="col mt-4">
      <h2>The 10 most highest Digital currencies !!</h2>
    </div>
    
  </div>
  <div className="row">
    <div className="col">
      <Card list={highestten}/>
    </div>
    <div className="col">
    <Card list={highestten}/>
    </div>
    <div className="col">
    <Card list={highestten}/>
    </div>
    <div className="col">
    <Card list={highestten}/>
    </div>
    <div className="col">
    <Card list={highestten}/>
    </div>
  </div>


</div>
  );
}

export default App;
