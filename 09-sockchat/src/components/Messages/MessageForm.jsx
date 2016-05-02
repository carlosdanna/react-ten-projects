import React, {Component} from 'react';


class MessageForm extends Component{

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" className="form-control" ref="text" placeholder="Please type a message..."></input>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        this.props.emit('messageAdded', {
            timeStamp: Date.now(),
            text: this.refs.text.value.trim()
        });

        this.refs.text.value = '';
    }
}

export default MessageForm;
