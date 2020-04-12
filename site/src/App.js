import React from 'react';
import './Style/App.sass';

import Header from './Components/Header/Header.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
			</div>
		)
	}
}

export default App;
