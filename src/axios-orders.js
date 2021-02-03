import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-ca527-default-rtdb.firebaseio.com/",
});

export default instance;
