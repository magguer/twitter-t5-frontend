import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Login() {
  //const [getInfo, setGetInfo] =
  const [email, setEmail] = useState("Blanca_Ortega@gmail.com");
  const [password, setPassword] = useState("asd");
  const [userToken, setUserToken] = useState("");
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.post("http://localhost:8000/token", {
        email: email,
        password: password,
      });
      const user = response.data;
      setUserToken(user.token);
      dispatch(login(user));
    };
    getToken();
  }, []);

  const getUsers = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${userToken}` },
      method: "get",
      url: "http://localhost:8000/users",
    });
    setUsers(response.data);
  };

  return (
    // Pasar la view de Login y ver la logica que tenia en los <%= %>
    <div>
      <button className="btn btn-primary">Boton</button>
    </div>
  );
}

export default Login;
