import React from 'react';
import './Style/App.sass';

import Header from './Components/Header/Header.jsx';
import Core from './Components/Core/Core.jsx';
import Git from './Components/Git/Git.jsx';
import Footer from './Components/Footer/Footer.jsx';

class App extends React.Component {
        render() {
                return (<div className="App">
                        <Header/>
                        <Core/>
                        <Git/>
                        <Footer/>
                </div>)
        }
}

export default App;
