import axios from "axios"
const baseURL = 3001
const api = axios.create({
	baseURL: `http://localhost:${baseURL}`,
	withCredentials: true
})

export default api
