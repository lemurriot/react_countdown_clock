import React from 'react';
import './App.css';
import Clock from './Clock'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline})
    }
    render() {
        return (
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <input 
                    type="text" 
                    placeholder='Enter new date'
                    onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <button onClick={()=> this.changeDeadline()}>Submit</button>
            </div>
        );
    }
}


export default App;