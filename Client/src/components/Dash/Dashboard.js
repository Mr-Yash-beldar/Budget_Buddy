import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from './bg.jpg'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Body = styled.div`
  input[type="checkbox"] {
    display: none;
    
  }

  label {
    background-color: #5a1193;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    cursor: pointer;
  }

  #btn {
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }

  #cancel {
    display: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-300px')}; /* Toggle left position based on isOpen state */
  background-color: #30005a;
  transition: all 0.3s;
`;

const SidebarHeader = styled.header`
  padding: 20px;
  text-align: center;
  background-color: #5a1193;
  color: #fff;
`;



const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  a {
    color: #fff;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    background-color: #5a1193;
  }
`;


function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <Body>
       {/* <LogoImage src={Image} alt="Your Logo" /> */}
      <input type="checkbox" id="check" checked={isOpen} onChange={toggleSidebar} />
      <label htmlFor="check">
      <FontAwesomeIcon icon={faBars} id="btn" />
      <FontAwesomeIcon icon={faTimes} id="btn" />

        {/* <i className="fas fa-times" id="cancel"></i> */}
      </label>
      <Sidebar isOpen={isOpen}>
      <SidebarHeader>
          Budget Buddy
        </SidebarHeader>
        <Ul>
          <Li>
            
              {/* <i className="fas fa-balance-scale"></i> */}
              <NavLink to="/dashboard">Budget</NavLink>
          
          </Li>
          <Li>
            
              <i className="fas fa-dollar-sign"></i>
              <NavLink to="/expenses">Expenses</NavLink>
           
          </Li>
          <Li>
            
              <i className="fas fa-piggy-bank"></i>
              <NavLink to="/savings">Savings</NavLink>
         
          </Li>
          <Li>
            
              <i className="fas fa-stream"></i>
              <NavLink to="/history">History</NavLink>
           
          </Li>
          <Li>
            
              <i className="fas fa-sign-out-alt"></i>
              <NavLink to="/">Logout</NavLink>
           
          </Li>
        </Ul>
      </Sidebar>
      <section></section>
    </Body>
  );
}

export default Dashboard;
