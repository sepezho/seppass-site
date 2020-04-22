import React from "react";

import s from "./Footer.module.sass";

class Footer_render extends React.Component {
        render() {
                return (<div className={s.FooterBg}>
                        <div className={s.Footer}>
                                <div className={s.Seppass_bot}>
                                        <a href='https://t.me/seppass_bot'>
                                                <h1>
                                                        @seppass_bot
                                                </h1>
                                        </a>
                                </div>
                                <div className={s.Author}>
                                        Автор:
                                        <a href='https://sepezho.ru'>sepezho</a>
                                </div>
                                <span className={s.Text}>
                                        Храните пароли правильно!
                                        <br/>
                                        <br/>
                                        2020
                                </span>

                        </div>
                </div>)
        }
}

export default Footer_render;
