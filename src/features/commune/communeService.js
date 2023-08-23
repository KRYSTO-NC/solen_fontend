import axios from 'axios'
const API_URL_COMMUNE = process.env.REACT_APP_BASE_API_URL + '/communes'

const createCommune = async (communeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_COMMUNE, communeData, config)
  return response.data
}

const getCommunes = async () => {
  const response = await axios.get(`${API_URL_COMMUNE}`)
  return response.data
}

const getCommune = async (id) => {
  const response = await axios.get(`${API_URL_COMMUNE}/${id}`)
  return response.data
}

const updateCommune = async (id, communeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_COMMUNE}/${id}`,
    communeData,
    config,
  )
  return response.data
}

const deleteCommune = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_COMMUNE}/${id}`, config)
  return response.data
}

const communeService = {
  createCommune,
  getCommunes,
  getCommune,
  updateCommune,
  deleteCommune,
}

export default communeService
