import axios from 'axios'
import Toast from 'react-native-toast-message'

const api = axios.create({
  baseURL: 'http://192.168.1.110:3000',
})

const createUser = async (myUser: UserType) => {
  try {
    await api.post('/users', myUser)
    Toast.show({
      type: 'success',
      text1: 'Sucesso ao criar usuário!',
    })
  } catch (error) {
    console.error('Erro ao buscar os dados:', error)
  }
}

export { createUser }
