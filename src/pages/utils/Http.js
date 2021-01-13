import axios from 'axios'

process.env.NODE_ENV === 'development' ? (
    axios.defaults.baseURL = 'https://domain.com/api'
) : (
  axios.defaults.baseURL = 'https://domain.com/api'
)

axios.defaults.headers.common['Authorization'] = "Basic " + window.btoa("usernmae:password")
axios.defaults.headers['content-type'] = 'application/json'
axios.defaults.headers['withCredentials'] = true
axios.defaults.headers['crossorigin'] = true

axios.interceptors.response.use(
  response => response,
  error => {
    // if(error.response.status === 401){
    //     store.dispatch(logout());
    // }
    return Promise.reject(error)
  }
)

export default axios
