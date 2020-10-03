import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from "../logo.svg";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mx-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  padding: 0.5rem 0.8rem;
  border: 0.05rem solid var(--lightblue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightblue)"};
  background: transparent;
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightblue)")};
  border-radius: 0.2rem;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightblue)"};
    color: ${(props) => (props.cart ? "var(--mainwhite)" : "var(--mainblue)")};
  }
  &:focus {
    outline: none;
  }
`;
const NavWrapper = styled.nav`
  background: var(--mainblue);
  .nav-link {
    color: var(--mainwhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
