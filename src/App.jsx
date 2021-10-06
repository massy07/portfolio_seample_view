import React, { useEffect, useState } from "react"; 
import { HomePage } from "./views/HomePage";
//import logo from './logo.svg';

//Style Of Component 
import '../src/theme/global.scss';

function App() { 
  
  const [ data, setData] =useState(null) 
  const [ loading, setLoading] =useState(true) 
  
  useEffect (() => { 
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api') 
      response.json()
      .then( dataElement => { setData(dataElement) } )
      .catch( error => { console.error("Fetching Error:",error) } )
      .finally( () => { setLoading(false) } )  
    } 
    fetchData()
  }, [])
  

  return (
    <div className="App-portfolio">  
      {loading 
        ? <h1>LOADING...</h1>
        : <HomePage data={data.results[0]} /> 
      }
      
    </div>
  );
}

export default App;
