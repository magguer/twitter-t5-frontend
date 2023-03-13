import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react"

function App() {
  //const [getInfo, setGetInfo] = 
  const [email, setEmail] = useState("Blanca_Ortega@gmail.com");
  const [password, setPassword] = useState("asd");

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.post(
        "http://localhost:8000/login", {
        email: email,
        password: password
      }
      );
    };
    getToken();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
