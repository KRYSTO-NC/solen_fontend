import axios from 'axios'
const API_URL_BENNEFICIAIRE =
  process.env.REACT_APP_BASE_API_URL + '/benneficiaires'

const createBenneficiaire = async (benneficiaireData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    API_URL_BENNEFICIAIRE,
    benneficiaireData,
    config,
  )
  return response.data
}

const getBenneficiaires = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(`${API_URL_BENNEFICIAIRE}`, config)
  return response.data
}

const getBenneficiaire = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(`${API_URL_BENNEFICIAIRE}/${id}`, config)
  return response.data
}

const deleteBenneficiaire = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_BENNEFICIAIRE}/${id}`, config)
  return response.data
}

const benneficiaireService = {
  createBenneficiaire,
  getBenneficiaires,
  getBenneficiaire,
  deleteBenneficiaire,
}

export default benneficiaireService
