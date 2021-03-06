import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {  
    renderSubmit(value) {
        return value === 'english' ? 'submit' : 'voorleggen';
    }   
    render() {
        return(
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;