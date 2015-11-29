import config from "./config";
import participantCollection from './participantCollection';
import ratingView from './ratingView';

let loaded = false;

class RatingController {
  constructor(args) {
    // code
  }

  listenUpdates() {
    const socket = new WebSocket(config.urls.updates);

    socket.onmessage = (event) => _handleSocketData(JSON.parse(event.data));
  }
}

function _handleSocketData(data) {
  if (data && data.status === config.ws.events.connect) {
    return participantCollection.getParticipants().then(participants => {
      loaded = true;
      ratingView.renderList(participants);
    });
  }
  else if (data && !loaded) {
    return participantCollection.accumulateUpdates(data);
  }
    
  return ratingView.renderList(participantCollection.applyUpdates(data));
}

export default new RatingController();