import axios from 'axios'
const API_URL_INSTALLATION =
  process.env.REACT_APP_BASE_API_URL + '/installations'

const createInstallation = async (installationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    API_URL_INSTALLATION,
    installationData,
    config,
  )
  return response.data
}

const getInstallations = async () => {
  const response = await axios.get(`${API_URL_INSTALLATION}`)
  return response.data
}

const getInstallation = async (id) => {
  const response = await axios.get(`${API_URL_INSTALLATION}/${id}`)
  return response.data
}

const updateInstallation = async (id, installationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_INSTALLATION}/${id}`,
    installationData,
    config,
  )
  return response.data
}

const deleteInstallation = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_INSTALLATION}/${id}`, config)
  return response.data
}

const installationService = {
  createInstallation,
  getInstallations,
  getInstallation,
  updateInstallation,
  deleteInstallation,
}

export default installationService
