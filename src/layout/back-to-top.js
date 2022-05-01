import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Scrolltop extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            visible: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    ToptoBottom()
    {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {

        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 150) {
            this.setState({
                visible: true
            });
        }
        else {
            this.setState({
                visible: false
            });
        }

    }
    render() {
        return (
            <div className={`scroll-top  ${(this.state.visible) ? 'scroll-visible' : '' }`} onClick={this.ToptoBottom} >
                <a className="smoothscroll" >
                    <i className="las la-angle-up"></i>
                </a>
            </div>
        );
    }
}

export default Scrolltop;