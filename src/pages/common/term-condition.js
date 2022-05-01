import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';

class termcondition extends Component {
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
          <Pageheading foldername={"Pages"} title={"Term & Conditions"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*terms start*/}
          <section>
            <Container>
              <Row>
                <div className="col-lg-12 col-md-12">
                  <h4 className="text-primary">1. Description of Service</h4>
                  <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi at fuga alias harum quo quibusdam odit eum reprehenderit consectetur suscipit!</p>
                  <h4 className="text-primary mt-5">2. Your Registration Obligations</h4>
                  <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.</p>
                  <h4 className="text-primary mt-5"> 3. User Account, Password, and Security</h4>
                  <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.</p>
                  <h4 className="text-primary mt-5">4. User Conduct</h4>
                  <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati.</p>
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge-primary-soft rounded p-1">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge-primary-soft rounded p-1">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Quidem error quae illo excepturi nostrum blanditiis laboriosam</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge-primary-soft rounded p-1">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Molestias, eum nihil expedita dolorum odio dolorem</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge-primary-soft rounded p-1">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Eum nihil expedita dolorum odio dolorem</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="mb-0 ml-3">Explicabo rem illum magni perferendis</p>
                  </div>
                  <h4 className="text-primary mt-5">5. International Use</h4>
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate incidunt aliquam sint, magnam excepturi quas a, id doloremque quasi iusto quo consequuntur dolorum neque optio ipsum, rerum nesciunt illo iure.</p> <Link className="btn btn-primary" to="#">Accept</Link>
                  <Link className="btn btn-outline-primary" to="#">Close</Link>
                </div>
              </Row>
            </Container>
          </section>
          {/*terms end*/}
        </div>
        {/*body content end*/}
      </>
    );
  }
}

export default termcondition;