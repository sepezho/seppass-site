import React from "react";
import View_more from "../../Static/Icon/View_more.png";
import Git_video from "../../Static/Git_video.mp4";
import s from "./Git.module.sass";

class Git_render extends React.Component {
        constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
        }

        handleClick = () => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        render() {
                return (<div className={s.GitBg}>
                        <div className={s.Git}>
                                <div className='Video_div' id={s.Video_div}>
                                        <video className='Video' id={s.Video} autoPlay={true} loop={true} muted="muted">
                                                <source src={Git_video} type='video/mp4'/>
                                        </video>
                                </div>
                                <div className={s.CoreText}>
                                        <p>
                                                Seppass может подвязаться к вашему gitHub. Эту идею я подчерпнул у менеджера pass, о котором я писал выше. Бот подключается к gitHub, при помощи токена, который вы создаете сами. Вы можете полностью контролировать доступ бота к вашим репозиториям. После добавления оного, бот сможет работать с его репозиторием.
                                        </p>
                                        <p>

                                                И тут начинается самое интересное, благодаря этой возможности seppass превосходит конкурентов. После подключения бота к вашей git-системе вы сможете выполнять основные git-комманды прямо через бота! Если вам необходимо сделать бэкап содержимого вашей папки на сторонний сервис, вам нужно будет создать пустой репозиторий на gitHub, а затем вызвать команду "/gitinit" в боте. И вуаля, копия всех данных уже лежит на gitHub, в новом репозитории! Так же есть и другие git-комманды, такие как "/gitpush" "/gitpull" и "/gitclone". У последней есть одна интересная деталь: при клонировании уже существующей папки с паролями на новй аккаунт seppass, вы должны иметь в корне копируемой c gitHub папки файлик "git_private_key.asc", с экспортируемым gpg-ключом.
                                        </p>
                                        <p>
                                                При граматной работе с этими командами вы всегда будете иметь полностью рабочий бэкап на сторонней git-системе. В случае каких-то неполадок вы сможете восстановить все пароли, и расшифровать их, т.к. они хранятся в шифрованном виде, а файлик с экспортированым gpg-ключом у вас уже есть.

                                        </p>
                                </div>
                                <img src={View_more} onClick={this.handleClick} alt='#'/>
                        </div>
                </div>)
        }
}

export default Git_render;
