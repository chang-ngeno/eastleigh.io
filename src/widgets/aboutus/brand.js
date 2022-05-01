import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Col>
                <div className="d-flex flex-wrap align-items-center text-center bg-white shadow">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/01.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/02.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/03.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/04.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/05.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/06.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/07.png`)} alt="" />
                    </div>
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/08.png`)} alt="" />
                    </div>
                </div>
            </Col>
        );
    }
}

export default Brand;