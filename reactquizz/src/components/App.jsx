import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Stephen'
                        },
                        {
                            id: 'd',
                            text: 'Dan'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your mothers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Racheal'
                        },
                        {
                            id: 'b',
                            text: 'Sara'
                        },
                        {
                            id: 'c',
                            text: 'Sue'
                        },
                        {
                            id: 'd',
                            text: 'Dona'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'What is your fathers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Boby'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Stephen'
                        },
                        {
                            id: 'd',
                            text: 'Michael'
                        }
                    ],
                    correct: 'd'
                },
                {
                    id: 4,
                    text: 'What is your friends name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Stephen'
                        },
                        {
                            id: 'd',
                            text: 'Michael'
                        }
                    ],
                    correct: 'a'
                },
            ],
            score: 0,
            current: 1
        }
    }
    render(){
        return (
            <div>
                <QuestionList {...this.state}/>
            </div>
        )
    }
}

export default App
