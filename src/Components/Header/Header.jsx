import React from "react";
import s from "./Header.module.sass";
import View_more from "../../Static/Icon/View_more.png";
import Header_video from "../../Static/Header_video.mp4";
import Card from "../Paralax_module.js";

class Header_render extends React.Component {
        constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
        }

        handleClick = () => {
                window.scrollTo({
                        top: document.querySelector('.' + s.HeaderBg).offsetHeight,
                        left: 0,
                        behavior: 'smooth'
                })
        }

        componentDidMount() {
                let card = new Card();
                card.run();
        }

        render() {
                return (<div className={s.HeaderBg}>
                        <div className={s.MainTitle}>
                                <a href='https://t.me/seppass_bot'>
                                        <h1>@seppass_bot</h1>
                                </a>
                        </div>
                        <div className={s.Header}>
                                <span className={s.Title}>
                                        <h1>Seppass</h1>
                                        - это единственный в своем роде телеграм-бот, который безопасно хранит пароли.
                                </span>
                                <img src={View_more} onClick={this.handleClick} alt='#'/>
                                <div className='Video_div' id={s.Video_div}>
                                        <video className='Video' id={s.Video} autoPlay={true} loop={true} muted="muted">
                                                <source src={Header_video} type='video/mp4'/>
                                        </video>
                                </div>
                        </div>
                </div>)
        }
}

export default Header_render;
