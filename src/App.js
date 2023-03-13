import './App.css';
import axios from 'axios';
import { useEffect } from "react"

function App() {
  //const [getInfo, setGetInfo] = 

  useEffect(() => {
    const getFilmInfo = async () => {
      const response = await axios.get(
        "http://localhost:8000/users"
      );
      console.log(response.data);
    };
    getFilmInfo();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
