import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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

    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+ this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userData: null})
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return (
            <div>
                <Profile userData = {this.state.userData}></Profile>
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
