import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  height: 100vh;
`;
//generellt för alla länkar
const NavLink = styled(Link)`
  display: block;
  font-size: 1.5rem;
  padding: 0.3rem 1rem;
`;

export default function Navigation() {
  return (
    <Navbar>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/home">Customers</NavLink>
      <NavLink to="/home/create">Create</NavLink>
    </Navbar>
  );
}
