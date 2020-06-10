export default {
  getRooms: () => ({
    method: 'get',
    url: '/rooms'
  }),
  getRoomsMessage: (roomId) => ({
    method: 'get',
    url: `/rooms/${roomId}/messages`
  }),
  getMe: () => ({
    method: 'get',
    url: '/me'
  }),
  getMembers: (roomId) => ({
    method: 'get',
    url: `/rooms/${roomId}/members`
  }),
  addMessages: (roomId, message) => ({
    method: 'post',
    url: `/rooms/${roomId}/messages`,
    data: `body=${message}`
  })
}
