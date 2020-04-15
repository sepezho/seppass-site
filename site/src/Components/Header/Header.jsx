import React from "react";

import View_more from "../../Static/Icon/View_more.png";
import Header_video from "../../Static/Header_video.mp4";

import Card from "../Paralax_module.js";
import s from "./Header.module.sass";

class Header_render extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
		// let StyleForMenu = {
  //     		background: "none",
  //     		boxShadow: "0 0 10px black"
  //   	};
  //   	this.state = {
	 //      	StyleForMenu: StyleForMenu,
  //   	}

    }
	
	handleClick = () => {
		window.scrollTo({top: document.documentElement.clientHeight, left: 0, behavior: 'smooth'})
	}
	
	componentDidMount(){
		let card = new Card(s);
		card.run();

		// window.addEventListener("scroll", () => {
		// 	if (window.scrollY > document.documentElement.clientHeight * 0.2) {
		// 		this.setState({
		// 			StyleForMenu: {
		// 				background: "white",
		// 				boxShadow: "0 0 10px black"
		// 			}
		// 		});
		// 		} else {
		// 		this.setState({
		// 			StyleForMenu: {
		// 				background: "none",
		// 				boxShadow: "0 0 10px black"
		// 			}
		// 		});
		// 	}
		// });
	}
	
	//Его структура кристально чиста.
	// style={this.state.StyleForMenu}
	render() {
		return (
			<div className={s.HeaderBg}>
				<div className={s.MainTitle}>
				<a href='https://t.me/seppass_bot'><h1>@seppass_bot</h1></a>
				</div>
				<div className={s.Header}>
					<h1>Seppass</h1>
					<span className={s.Title}>
						- это единственный в своем роде телеграм-бот, который безопасно хранит пароли.
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
			</div>
		)
	}
}

export default Header_render;