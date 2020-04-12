import React from "react";
import View_more from "../../Static/Icon/View_more.png";

import s from "./Header.module.sass";

class Header_render extends React.Component {
	render() {
		return (
			<div className={s.Header}>
				
				<h2>Seppass_site</h2>
				<h1>Seppass</h1>
				<span className={s.Title}>
					- это единственный в своем роде телеграм-бот, который хранит пароли максимально безопасно. Его структура зеркально чиста.
				</span>
				<img src={View_more} href='#' />

			</div>
		)
	}
}

export default Header_render;