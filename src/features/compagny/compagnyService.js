import axios from 'axios'
const API_URL_COMPAGNY = process.env.REACT_APP_BASE_API_URL + '/compagnies'

const createCompagny = async (compagnyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_COMPAGNY, compagnyData, config)
  return response.data
}

const getCompagnies = async () => {
  const response = await axios.get(`${API_URL_COMPAGNY}`)
  return response.data
}

const getCompagny = async (id) => {
  const response = await axios.get(`${API_URL_COMPAGNY}/${id}`)
  return response.data
}

const updateCompagny = async (id, compagnyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_COMPAGNY}/${id}`,
    compagnyData,
    config,
  )
  return response.data
}

const deleteCompagny = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_COMPAGNY}/${id}`, config)
  return response.data
}

const compagnyService = {
  createCompagny,
  getCompagnies,
  getCompagny,
  updateCompagny,
  deleteCompagny,
}

export default compagnyService
