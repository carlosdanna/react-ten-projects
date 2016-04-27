import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'carlosdanna',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    render(){
        return (
            <div>
                {this.state.username}
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: '12419be69b1866abaeec',
    clientSecret: '1d926709c354f52baf92a2556be6fa22d1709ccf'
}
export default App;
