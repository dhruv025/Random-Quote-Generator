import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App(){

  const [quote,setQuote] = useState("");
  
  const fetchQuote = () =>{
    return axios.get('https://type.fit/api/quotes')
    .then((response) => {
      let randNum = Math.floor(Math.random()*response.data.length);
      setQuote(response.data[randNum]);
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  useEffect(() =>{
    fetchQuote(); 
  },[])

  return (
    <div className="app">
      <div className="card">
        <div className="card1">
          <h2 className="heading">{quote.text}</h2>
          <h3 className="auth">~{quote.author}</h3>
        </div>
        <div className="card2">
          <button className="button" onClick={fetchQuote}><span>GET QUOTE</span></button>
          <a href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_blank" rel="noopener noreferrer" className="tweetbtn">Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;