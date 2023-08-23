import axios from 'axios'
const API_URL_DEMANDEUR = process.env.REACT_APP_BASE_API_URL + '/demandeurs'

const createDemandeur = async (demandeurData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_DEMANDEUR, demandeurData, config)
  return response.data
}

const getDemandeurs = async () => {
  const response = await axios.get(`${API_URL_DEMANDEUR}`)
  return response.data
}

const getDemandeur = async (id) => {
  const response = await axios.get(`${API_URL_DEMANDEUR}/${id}`)
  return response.data
}

const updateDemandeur = async (id, demandeurData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_DEMANDEUR}/${id}`,
    demandeurData,
    config,
  )
  return response.data
}

const deleteDemandeur = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_DEMANDEUR}/${id}`, config)
  return response.data
}

const demandeurService = {
  createDemandeur,
  getDemandeurs,
  getDemandeur,
  updateDemandeur,
  deleteDemandeur,
}

export default demandeurService
