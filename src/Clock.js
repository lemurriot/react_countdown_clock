import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({ days, hours, minutes, seconds})
    }
    render(){
        const { days, hours, minutes, seconds } = this.state;

        return (
            <section className="clock-container">
                <div className="clock clock-days">{days} Days</div>
                <div className="clock clock-hours">{hours} Hours</div>
                <div className="clock clock-minutes">{minutes} Minutes</div>
                <div className="clock clock-seconds">{seconds} Seconds</div>
            </section>
        );
    }
}

export default Clock;

