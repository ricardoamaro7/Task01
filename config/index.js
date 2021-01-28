import axios from 'axios' 


const api = axios.create({
    baseURL: 'http://192.168.04:3000/task', 
    headers: {
        Accept: 'applications/json',
        'Content-Type': 'application/json'
    }
})

export default api;
    


