import axios from 'axios'
import API from './apis'

const BASE_URL = 'https://api.chatwork.com/v2'

const request = async (api, token) => {
  const baseAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-ChatWorkToken': token
    },
    validateStatus: status => status >= 200 && status < 500
  })
  const response = await baseAxios.request(api)
  const { data, status } = response
  if (status && status === 200) {
    return data
  }
  throw new Error(JSON.stringify(data.errors) || 'Response Format Error')
}

export default {
  getRooms: (token) => request(API.getRooms(), token),
  getRoomsMessage: (roomId, token) => request(API.getRoomsMessage(roomId), token),
  getMe: (token) => request(API.getMe(), token),
  getMembers: (roomId, token) => request(API.getMembers(roomId), token),
  addMessages: (roomId, message, token) => request(API.addMessages(roomId, message), token)
}
