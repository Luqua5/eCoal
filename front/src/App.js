import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';



function App() {
  //make a get request to localhost:8000/test with axios

  const [nb, setNb ] = useState(0)  

  
//   this.state = {
//     filter: []
// }
  
  async function getArticles() {  // The function is asynchronous
    const articles = (await axios.get('http://localhost:8000/api/test')).data
    console.log(articles)
    return articles;
  }

  return (
    <div className="App">
      
      {getArticles()}
    </div>
  );
}

export default App;
