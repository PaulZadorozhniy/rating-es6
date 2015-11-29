
class RatingView {
  constructor(args) {
    this.ratingView = document.getElementById('rating');
  }

  renderList(participants) {
  	this.ratingView.innerHTML = participants.map(
  		participant => `<li>${participant.name} ${participant.points}</li>`
  	).join('');
  }
}

export default new RatingView();