export default {
  urls: {
    list: 'http://rating.smartjs.academy/rating?hardMode',
    updates: 'ws://rating.smartjs.academy/rating'
  },
  ws: {
    events: {
      connect: 'CONNECTED'
    }
  }
}