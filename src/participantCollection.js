import config from "./config";

class ParticipantCollection {
  constructor() {
    this.participants = [];
    this._version = undefined;
    this._updates = [];
  }

  getParticipants() {
    return fetch(config.urls.list)
      .then(response =>  response.json())
      .then(participants => {
        this.participants = participants.records;
        return this._updates ? this.applyAccumulatedUpdates(this._updates) : this.sort(this.participants);
      })
  }

  sort(participants) {
    return participants.sort((a,b) => b.points - a.points );
  }

  accumulateUpdates(updates) {
    this._updates  = this._updates.concat(updates);
  }

  applyAccumulatedUpdates(setsUpdates) {
    setsUpdates.forEach((data) => {
      if(data.fromVersion < this._version) return;

      this.applyUpdates(data);
    });

    return this.sort(this.participants);
  }

  //TODO solve sorting after applyAccumulatedUpdates
  applyUpdates(data) {
    data.updates.forEach((update) => 
      this.participants.find((element, index, array) => 
        element.id == update.id).points = update.points);

    return this.sort(this.participants);
  }
}

export default new ParticipantCollection();