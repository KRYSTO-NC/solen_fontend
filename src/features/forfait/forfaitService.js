import axios from 'axios'
const API_URL_FORFAIT = process.env.REACT_APP_BASE_API_URL + '/forfaits'

const createForfait = async (forfaitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_FORFAIT, forfaitData, config)
  return response.data
}

const getForfaits = async () => {
  const response = await axios.get(`${API_URL_FORFAIT}`)
  return response.data
}

const getForfait = async (id) => {
  const response = await axios.get(`${API_URL_FORFAIT}/${id}`)
  return response.data
}

const updateForfait = async (id, forfaitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_FORFAIT}/${id}`,
    forfaitData,
    config,
  )
  return response.data
}

const deleteForfait = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_FORFAIT}/${id}`, config)
  return response.data
}

const forfaitService = {
  createForfait,
  getForfaits,
  getForfait,
  updateForfait,
  deleteForfait,
}

export default forfaitService
