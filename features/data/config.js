import axios from "axios";

// axios.defaults.baseURL = 'http://godoynetworks.com:8098'
axios.defaults.baseURL = 'http://godoynetworks.com:8098'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios