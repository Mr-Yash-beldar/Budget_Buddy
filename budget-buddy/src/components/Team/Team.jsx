import React from "react";
import TeamCard from "./TeamCard";
import "./Team.css";
import teamMembers from "../../teamMembers";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <section id="Team" className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2 className="">
            Our <span> Team</span>
          </h2>
          <br />
        </div>

        <div className="team_container">
          <div className="row flex justify-center gap-2">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index} // Ensure each component has a unique key
                member={member}
              />
            ))}
          </div>
        </div>
        <div className="team_container">
          <div className="row ">

            <button className="btn-box ">
              <NavLink to="/login" className="nav-link">
                <i className="fa fa-user" aria-hidden="true"></i>
                Login
              </NavLink>
            </button>
            <div style={{ marginRight: '5cm' }}></div>
            <button className="btn-box">
              <NavLink to="/register" className="nav-link">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                Signup
              </NavLink>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
