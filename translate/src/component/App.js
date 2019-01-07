import React from 'react';
import ReactDOM from 'react-dom';
import UserCreate from '../component/UserCreate';
import LanguageContext from '../context/LanguageContext'; 


class App extends React.Component {
    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return(
            <div className="ui container">
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    Select language:  
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;