import axios from "axios";

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" /*baseurl url que nunca muda*/
});

export default api;