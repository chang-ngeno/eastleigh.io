import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class Brand1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    },
                },
            },
        };
    }
    render() {
        return (
            <OwlCarousel
                className="owl-carousel no-pb"
                {...this.state.options} >
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/01.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/02.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/03.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/04.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/05.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/06.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/07.png`)} alt="" />
                </div>
                <div className="item">
                    <img className="img-fluid d-inline" src={require(`../../assets/images/client/08.png`)} alt="" />
                </div>
            </OwlCarousel>
        );
    }
}

export default Brand1;