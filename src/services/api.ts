import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/JulioDinizN/Podcastr/main/server.json",
});
