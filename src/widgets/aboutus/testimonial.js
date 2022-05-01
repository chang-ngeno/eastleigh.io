import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                nav:false,
                dots:true,
                responsive:{
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3,
                    },
                },
            },
        };
    }
    render() {
        return (
                <OwlCarousel
                    className="owl-carousel"
                    {...this.state.options}
                >
                    <div className="item">
                        <div className="card p-5 p-lg-8 bg-white shadow-sm border-0 mx-3 mt-3">
                            <div>
                                <img alt="Image" src={require(`../../assets/images/thumbnail/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-muted">Ekocart Amazing E-commerce Template, clean code, Crative &amp; Modern design.</p>
                                <div>
                                    <h5 className="text-primary d-inline mb-0">Ember Lana</h5>
                                    <small className="text-muted font-italic">- Founder</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card p-5 p-lg-8 bg-white shadow-sm border-0 mx-3 mt-3">
                            <div>
                                <img alt="Image" src={require(`../../assets/images/thumbnail/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-muted">Ekocart Amazing E-commerce Template, clean code, Crative &amp; Modern design.</p>
                                <div>
                                    <h5 className="text-primary d-inline mb-0">Scott Jones</h5>
                                    <small className="text-muted font-italic">- Supervisor</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card p-5 p-lg-8 bg-white shadow-sm border-0 mx-3 mt-3">
                            <div>
                                <img alt="Image" src={require(`../../assets/images/thumbnail/03.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-muted">Ekocart Amazing E-commerce Template, clean code, Crative &amp; Modern design.</p>
                                <div>
                                    <h5 className="text-primary d-inline mb-0">Amber Holmes</h5>
                                    <small className="text-muted font-italic">- Manager</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card p-5 p-lg-8 bg-white shadow-sm border-0 mx-3 mt-3">
                            <div>
                                <img alt="Image" src={require(`../../assets/images/thumbnail/02.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline" />
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-muted">Ekocart Amazing E-commerce Template, clean code, Crative &amp; Modern design.</p>
                                <div>
                                    <h5 className="text-primary d-inline mb-0">Scott Jones</h5>
                                    <small className="text-muted font-italic">- Ceo</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
        );
    }
}

export default Testimonial;