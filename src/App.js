import React from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            inputValue: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.inputValue});
        this.setState({inputValue: ''})
    }
    render() {
        return (
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                        type="text" 
                        placeholder='Enter new date'
                        value={this.state.inputValue}
                        onChange={event => this.setState({inputValue: event.target.value})}
                    />
                    <Button onClick={()=> this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        );
    }
}


export default App;