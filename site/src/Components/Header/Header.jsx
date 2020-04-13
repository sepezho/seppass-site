import React from "react";

import View_more from "../../Static/Icon/View_more.png";
import Header_video from "../../Static/Header_video.mp4";
import s from "./Header.module.sass";

class Header_render extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
	
	handleClick = () => {
		window.scrollTo({top: document.documentElement.clientHeight, left: 0, behavior: 'smooth'})
	}
	componentDidMount(){
		let card = new Card(s.Video_div);
		card.run();
	}
	render() {
		return (
			<div className={s.Header}>
				<h2>Seppass_site</h2>
				<h1>Seppass</h1>
				<span className={s.Title}>
					- это единственный в своем роде телеграм-бот, который хранит пароли максимально безопасно. Его структура зеркально чиста.
				</span>
				<img
					src={View_more}
					href='#' 
            		onClick={this.handleClick}
				 />
				<div className={s.Video_div}>
					<video className={s.Video} autoPlay={true} loop={true} muted="muted">
    					<source src={Header_video} type='video/mp4'/>
   					</video> 
				</div>
			</div>
		)
	}
}

function Card(classCard) {
  this.cards = document.querySelectorAll('.' + classCard);
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




export default Header_render;