import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";

function App() {
  //const [getInfo, setGetInfo] =
  const [email, setEmail] = useState("Elsa_Espino@gmail.com");
  const [password, setPassword] = useState("asd");

  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = async () => {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      const user = response.data;
      dispatch(login(user));
    };
    getToken();
  }, []);

  return <div className="App"></div>;
}

export default App;
