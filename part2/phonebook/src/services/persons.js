// src/services/persons.js
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  console.log('🌐 Service: Getting all persons')
  const request = axios.get(baseUrl)
  return request.then(response => {
    console.log('✅ Service: Received persons from server:', response.data)
    return response.data
  })
}

const create = newObject => {
  console.log('🌐 Service: Creating new person:', newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => {
    console.log('✅ Service: Created person:', response.data)
    return response.data
  })
}

export default { getAll, create }