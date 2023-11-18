import React from 'react'
import "./Feature.css"

const Feature = () => {
  return (
    <section id="Feature" className="service_section layout_padding">
          <div className="service_container">
            <div className="container ">
              <div className="heading_container heading_center">
                <h2>
                  Our <span>Features</span>
                </h2>
                <p>
                  The application provides a number of features to keep track of
                  your income, expenses, and savings goals.
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="assets/images/s1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>User Registration and Authentication</h5>
                      <p>
                        Secure user registration and login process using JWT
                        authentication.Password hashing and encryption to
                        protect user credentials.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="assets/images/s2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Budget Creation and Management:</h5>
                      <p>
                        Ability for users to create and manage multiple budget
                        categories. Set budget limits for each category to track
                        spending
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="assets/images/s3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Data Security and Privacy:</h5>
                      <p>
                        Implement robust security measures to protect user data.
                        Ensure compliance with data protection regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
  )
}

export default Feature
