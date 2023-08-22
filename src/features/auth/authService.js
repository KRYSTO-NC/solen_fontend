import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/auth'

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData)

  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
    localStorage.setItem('userRole', JSON.stringify(response.data.userRole))

  }
  return response.data
}

// get current logged user
const getCurrentUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log(config)
  const response = await axios.get(`${API_URL}/auth/me`, config)
  return response.data
}



// Logout
const logout = () => {
  localStorage.removeItem('userToken')
}

const authService = {
  logout,
  login,
  getCurrentUser
}

export default authService
