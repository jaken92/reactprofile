import axios from "axios";

const mailApiUrl = import.meta.env.VITE_API_URL;

const mailApiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mailApiClient;
