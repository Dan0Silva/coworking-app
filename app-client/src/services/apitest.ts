import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.110:3000',
})

const fetchData = async (setData: Function) => {
  try {
    const response = await api.get('/users')
    setData(response.data)
  } catch (error) {
    console.error('Erro ao buscar os dados:', error)
  }
}

export { fetchData }

export default api
