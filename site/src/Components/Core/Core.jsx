import React from "react";
import Core_video from "../../Static/Core_video.mp4";
import View_more from "../../Static/Icon/View_more.png";
import s from "./Core.module.sass";

class Core_render extends React.Component {
        constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
        }

        handleClick = () => {
                window.scrollTo({
                        top: document.querySelector('.' + s.CoreBg).offsetTop + document.querySelector('.' + s.CoreBg).offsetHeight,
                        left: 0,
                        behavior: 'smooth'
                })
        }

        render() {
                return (<div className={s.CoreBg}>
                        <div className={s.Core}>
                                <div className='Video_div' id={s.Video_div}>
                                        <video className='Video' id={s.Video} autoPlay={true} loop={true} muted="muted">
                                                <source src={Core_video} type='video/mp4'/>
                                        </video>
                                </div>
                                <div className={s.CoreText}>
                                        <p>
                                                <a href='https://t.me/seppass_bot'>@seppass_bot</a>
                                                - это надежный способ хранения записей. Каждый пользователь на сервере имеет его собственную папку, в которой хранятся его записи и другая информация. Чтобы удостовериться в этом вы всегда можете скачать папку со всей вашей информацией и файлами, как она есть. Каждый пользователь при регистрации генерирует свой собственный gpg-ключ, пароль от него создает и знает только он (на сервере пароль нигде не сохраняется!). В дальнейшем, при создании записи она шифруется, и записывается в файлик, в вашу папку. После создания записи НИКТО не сможет её просмотреть, не зная пароля от ключа. Даже если данные утекут, они останутся зашифрованы вашим gpg-ключом. Такая система делает
                                                <a href='https://t.me/seppass_bot'>@seppass_bot</a>
                                                одним из самых надежных вариантом хранения записей (паролей).
                                        </p>
                                        <p>
                                                Стоит отметить кроссплатформенность данного решения, т.к. доступ к вашим данным осуществляется через telegram, а этот мессенджер отличается своей доступностью и надежностью. Так же его можно установить и запустить практически с любого устройства.
                                        </p>
                                        <p>
                                                При создании бота я был вдохновлен менеджерем pass для linux. Его главная проблема была в том, что он работал только на моем пк, просмотреть же пароли с телефона не предстовлялось возможным. Я сделал утилиту лучше и не менее надежную, чем знаменитый менеджер pass.
                                        </p>
                                </div>
                                <img src={View_more} onClick={this.handleClick} alt='#'/>
                        </div>
                </div>)
        }
}

export default Core_render;
