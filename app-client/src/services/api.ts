import axios from 'axios'
import { ToastShowParams } from 'react-native-toast-message'

const my_ip = '192.168.1.102'

const api = axios.create({
  baseURL: `http://${my_ip}:3000`,
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

const LoginUser = async (
  email: string,
  password: string,
): Promise<ToastShowParams> => {
  try {
    await api.post('/userLogin', { email, password })
    return {
      type: 'success',
      text1: 'Sucesso ao criar usuário!',
    }
  } catch (error) {
    return {
      type: 'error',
      text1: 'Email ou senha incorretos',
    }
  }
}

export { createUser, LoginUser }
