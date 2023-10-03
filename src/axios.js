import axios from "axios";

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export default API;
// if  export default , now we can import it using any alias name eg. API or axios or any other name