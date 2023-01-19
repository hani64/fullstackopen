/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const URL = 'http://localhost:3001/persons'

const getPersons = () => {
  const req = axios.get(URL)
  return req.then((res, err) => {
    if (err) {
      return err
    }
    return res.data
  })
}

const sendPerson = (person) => {
  return axios.post(URL, person).then((res, err) => {
    if (err) {
      return err
    }
    return res.data
  })
}

const updatePerson = (id, newPerson) => {
  return axios.put(`${URL}/${id}`, newPerson).then((res, err) => {
    if (err) {
      return err
    }
    return res.data
  })
}

export default { getPersons, sendPerson, updatePerson }
