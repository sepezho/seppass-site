function Card(s) {
	this.cards = document.querySelectorAll('.' + s.Video_div);
	this.bindEventsCard = function() {
		for (let i = 0, length = this.cards.length; i < length; i++) {
			this.cards[i].addEventListener('mousemove', this.startRotate);
			this.cards[i].addEventListener('mouseout', this.stopRotate);
		}
	}
	this.startRotate = function(event) {
		let cardItem = this.querySelector('.'+s.Video),
			halfHeight = cardItem.offsetHeight / 2,
			halfWidth = cardItem.offsetWidth / 2;
		cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 25 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 25 + 'deg)';
	}
	this.stopRotate = function(event) {
		let cardItem = this.querySelector('.'+s.Video);
		cardItem.style.transform = 'rotate(0)';
	}
	this.run = () => {
		this.bindEventsCard();
	}
}
	
export default Card