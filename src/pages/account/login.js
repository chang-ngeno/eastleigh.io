import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                {/*hero section start*/}
                <section className="bg-light">
                    <Pageheading foldername={"Pages"} title={"Login"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row className="justify-content-center">
                                <div className="col-lg-5">
                                    <div className="shadow p-3">
                                        <img className="img-fluid mb-5" src={require(`../../assets/images/login.png`)} alt="" />
                                        <h3 className="text-center mb-3 text-uppercase">User Login</h3>
                                        <form id="contact-form" method="post" action="php/contact.php">
                                            <div className="messages" />
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="User name" required="required" data-error="Username is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group">
                                                <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <div className="remember-checkbox d-flex align-items-center justify-content-between">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="check2" name="check2" />
                                                        <label htmlFor="check2">Remember me</label>
                                                    </div>
                                                    <Link to="/forgot-password">Forgot Password?</Link>
                                                </div>
                                            </div> <Link to="#" className="btn btn-primary btn-block">Login Now</Link>
                                        </form>
                                        <div className="d-flex align-items-center text-center justify-content-center mt-4">
                                            <span className="text-muted mr-1">Don't have an account?</span>
                                            <Link to="/sign-up">Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>
                    {/*login end*/}
                </div>
                {/*body content end*/}
            </>
        );
    }
}

export default login;