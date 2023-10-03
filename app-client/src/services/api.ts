import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.110:3000',
})

const createUser = async (myUser: UserType) => {
  try {
    await api.post('/users', myUser)
    console.warn('criado com sucesso!')
  } catch (error) {
    console.error('Erro ao buscar os dados:', error)
  }
}

export { createUser }
