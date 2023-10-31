import axios from 'axios'
import { ToastShowParams } from 'react-native-toast-message'

const api = axios.create({
  baseURL: 'http://192.168.1.104:3000',
})

const createUser = async (myUser: UserType): Promise<ToastShowParams> => {
  try {
    await api.post('/users', myUser)
    return {
      type: 'success',
      text1: 'Sucesso ao criar usuário!',
    }
  } catch (error) {
    return {
      type: 'error',
      text1: 'Erro ao criar usuário!',
    }
  }
}

export { createUser }
