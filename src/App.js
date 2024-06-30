import axios from 'axios';
import './App.css';

function App() {

  const apiCall = () => {
    axios.get('http://localhost:8081') //which is where the server is
    .then((data) => {
      console.log("It works!")
      console.log(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}

export default App;
