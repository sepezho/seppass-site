import React from 'react';
import './Style/App.sass';

import Header from './Components/Header/Header.jsx';
import Core from './Components/Core/Core.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Core />
			</div>
		)
	}
}

export default App;
