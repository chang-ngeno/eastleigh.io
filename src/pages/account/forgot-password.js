import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';

class forgotpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            {/*hero section start*/}
            <section className="bg-light">
              <Pageheading foldername={"Pages"} title={"Forgot Password"} />
            </section>
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*login start*/}
              <section>
                <Container>
                  <Row className="justify-content-center">
                    <div className="col-5">
                      <div>
                        <div className="text-center mb-5">
                          <h2>Forgot your password?</h2>
                          <p>Enter your email to reset your password.</p>
                        </div>
                        <form id="contact-form" method="post" action="php/contact.php">
                          <div className="messages" />
                          <div className="form-group">
                            <label>Email Address</label>
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <Link to="#" className="btn btn-primary btn-animated btn-block">Reset Password</Link>
                        </form>
                        <div className="mt-4 text-center">
                          <Link className="btn-link"  to="/sign-in">Back to sign in</Link>
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

export default forgotpassword;