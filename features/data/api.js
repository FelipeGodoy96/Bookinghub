import axios from './config'

const createUser = async newUser => {
    try {
        await axios.post('/clients', newUser)
    }
    catch(err){
        console.error(err)
    }
}

const authenticateUser = async ({email, password}) => {
    try {
        const response = await axios.post('/auth/login', {email, password})
        return response.data
    }
    catch (err) {
        console.error(err.message + ': ' + err.response.data.message)
    }
}

const api = {
    createUser,
    authenticateUser
}

export default api