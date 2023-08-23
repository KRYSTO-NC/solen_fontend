import axios from 'axios'

const API_URL_ORIGINE = process.env.REACT_APP_BASE_API_URL + '/origines'

const createOrigine = async (origineData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_ORIGINE, origineData, config)
  return response.data
}

const getOrigines = async () => {
  const response = await axios.get(`${API_URL_ORIGINE}`)
  return response.data
}

const getOrigine = async (id) => {
  const response = await axios.get(`${API_URL_ORIGINE}/${id}`)
  return response.data
}

const updateOrigine = async (id, origineData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_ORIGINE}/${id}`,
    origineData,
    config,
  )
  return response.data
}

const deleteOrigine = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_ORIGINE}/${id}`, config)
  return response.data
}

const origineService = {
  createOrigine,
  getOrigines,
  getOrigine,
  updateOrigine,
  deleteOrigine,
}

export default origineService
