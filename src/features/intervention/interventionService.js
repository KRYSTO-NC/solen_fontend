import axios from 'axios'
const API_URL_INTERVENTION =
  process.env.REACT_APP_BASE_API_URL + '/interventions'

const createIntervention = async (interventionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    API_URL_INTERVENTION,
    interventionData,
    config,
  )
  return response.data
}

const getInterventions = async () => {
  const response = await axios.get(`${API_URL_INTERVENTION}`)
  return response.data
}

const getIntervention = async (id) => {
  const response = await axios.get(`${API_URL_INTERVENTION}/${id}`)
  return response.data
}

const updateIntervention = async (id, interventionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_INTERVENTION}/${id}`,
    interventionData,
    config,
  )
  return response.data
}

const deleteIntervention = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_INTERVENTION}/${id}`, config)
  return response.data
}

const interventionService = {
  createIntervention,
  getInterventions,
  getIntervention,
  updateIntervention,
  deleteIntervention,
}

export default interventionService
