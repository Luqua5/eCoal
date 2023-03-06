import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  //make a get request to localhost:8000/test with axios
  
  async function getArticles() {  // The function is asynchronous
    const articles = (await axios.get('http://localhost:8000/api/test')).data
    return articles;
  }

  return (
    <div className="App">
      {{getArticles}}
    </div>
  );
}

export default App;
