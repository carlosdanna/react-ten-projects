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
            url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userData: null})
                alert(err);
            }.bind(this)
        });
    }

    getUserRepos(){
        $.ajax({
            url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userRepos: null})
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return (
            <div>
                <Profile {...this.state}></Profile>
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
