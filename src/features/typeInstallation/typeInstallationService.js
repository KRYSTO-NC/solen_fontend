import axios from 'axios'

const API_URL_TYPE_INSTALLATION =
  process.env.REACT_APP_BASE_API_URL + '/typesinstallations'

const createTypeInstallation = async (typeInstallationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    API_URL_TYPE_INSTALLATION,
    typeInstallationData,
    config,
  )
  return response.data
}

const getTypeInstallations = async () => {
  const response = await axios.get(`${API_URL_TYPE_INSTALLATION}`)
  return response.data
}

const getTypeInstallation = async (id) => {
  const response = await axios.get(`${API_URL_TYPE_INSTALLATION}/${id}`)
  return response.data
}

const updateTypeInstallation = async (id, typeInstallationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_TYPE_INSTALLATION}/${id}`,
    typeInstallationData,
    config,
  )
  return response.data
}

const deleteTypeInstallation = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(
    `${API_URL_TYPE_INSTALLATION}/${id}`,
    config,
  )
  return response.data
}

const typeInstallationService = {
  createTypeInstallation,
  getTypeInstallations,
  getTypeInstallation,
  updateTypeInstallation,
  deleteTypeInstallation,
}

export default typeInstallationService
