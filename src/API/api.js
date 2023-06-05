import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy/',
})

export function getId() {
  return instance
    .get('search')
    .then((res) => res.data.searchId)
    .catch((error) => {
      throw new Error(error)
    })
}

export function getTickets(searchId) {
  return instance
    .get(`tickets?searchId=${searchId}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 500) {
        return error.response
      }
      throw new Error(error)
    })
}
