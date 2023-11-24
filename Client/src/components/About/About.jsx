import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section id="About" className="about_section layout_padding">
          <div className="container  ">
            <div className="heading_container heading_center">
              <h2>
                About <span>Us</span>
              </h2>
              <p>
                A personal finance application that securely manages user
                budgets and transactions using JWT authentication and MongoDB.{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src="assets/images/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h3>Description</h3>
                  <p>
                    "BudgetBuddy" is a personal finance application that helps
                    users manage their budgets and track their transactions. The
                    application provides a secure and user-friendly interface
                    for individuals to keep track of their income, expenses, and
                    savings goals.Using JWT authentication, users can securely
                    register and log in to their accounts, ensuring their
                    financial information remains protected.
                  </p>
                  <p>
                    Overall, "BudgetBuddy" aims to simplify personal finance
                    management, promote responsible spending, and help users
                    achieve their financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default About
