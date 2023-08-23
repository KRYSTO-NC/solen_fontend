import axios from 'axios'
const API_URL_CONTACT = process.env.REACT_APP_BASE_API_URL + '/contacts'

const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_CONTACT, contactData, config)
  return response.data
}

const getContacts = async () => {
  const response = await axios.get(`${API_URL_CONTACT}`)
  return response.data
}

const getContact = async (id) => {
  const response = await axios.get(`${API_URL_CONTACT}/${id}`)
  return response.data
}

const updateContact = async (id, contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    `${API_URL_CONTACT}/${id}`,
    contactData,
    config,
  )
  return response.data
}

const deleteContact = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL_CONTACT}/${id}`, config)
  return response.data
}

const contactService = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
}

export default contactService
