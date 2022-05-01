import React, { Component } from 'react';

class CommingSoonCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { time: {}, seconds: props.time ? props.time : props.time };
        this.timer = 0;
        this.timecount = this.timecount.bind(this);
    }

    TimerClock(secs) {
        let days = Math.floor(secs / (60 * 60 * 24));

        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;

        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            d: days,
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeset = this.TimerClock(this.state.seconds);
        this.setState({ time: timeset });
        this.startTimer();
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.timecount, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timecount() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.TimerClock(seconds),
            seconds: seconds
        });
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }
    render() {
        const { d, h, m, s } = this.state.time;
        return (
            <>
                <li>
                    <span className="days">{d}</span>
                    <p className="days_ref">D</p>
                </li>
                <li>
                    <span className="hours">{h}</span>
                    <p className="hours_ref">H</p>
                </li>
                <li>
                    <span className="minutes">{m}</span>
                    <p className="minutes_ref">M</p>
                </li>
                <li>
                    <span className="seconds">{s < 10 ? `0${s}` : s}</span>
                    <p className="seconds_ref">S</p>
                </li>
            </>
        );
    }
}

export default CommingSoonCounter;