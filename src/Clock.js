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

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log(time);
    }
    render(){
        const { days, hours, minutes, seconds } = this.state;
        this.getTimeUntil(this.props.deadline);
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

