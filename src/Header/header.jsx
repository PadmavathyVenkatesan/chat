import React, { Component } from "react";

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { Link } from "react-router-dom";

import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="mb-50">
        <Navbar color="faded" light fixed="top" expand="md">
          <Link to="/">
            <img
              width="50%"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAAOVBMVEX///8zMzPsHCT08vLf399BQUFNTU1gYGB1dXXQ0NDCwsKxsbGFhYWdnZ31hYnwQ0r81df6wMLyYmfGqrXEAAAD1UlEQVR4nO2Y2ZLbIBBFLbNvYzv//7Ghm0VI4HgqLxml7qlkbCMJjppmkW43AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Vzy/xrxW+yetxv4jr83G/37/+tcV3YNP7FeL6KqYXcH020x+fA4Ppm7gK6ZyTYiyQcvju+F8tkcMxPlHWT1EOnuvolx/qzw26SeU1mq5cRbBabcpE34uS1qad53TFJCoSMX9z7USfyyN9mlJo9mN0KF8gTbs89qtcNGrbtE37PRPPo+mcAzLmyxidmrzZNtXE/dZQMTctbP7WT6Qflk5SmyaTXFW7x5APkaru17f6vekl4U+m57hKuk4bQ/fZFAJ9t2JXzYcNNRmr3ebGE4+q7UK/q1L1XH/kJMklqlbodpHXbHpyjVRDThtB91paIZvadGlSUUfJXKplVbU9+rOqSqeoqkDZGUw9lPJnoCPJ2D/G9JQDXtd7zRlkbMkdpzdjuYFR9eaoiaqqXLOZVWvu+IMq15/vtQSnJskwPo9jf/jR4yoih6r+2LMs5bZN78iiKjRlSFHl+Au9Vi1fw1mV5T2r6n0Er3r/67VwpUyNpzkhd6ty/OeoKlWLqtbcWKIknocV/ZcrVaF4NCRK/uTH0X/q/cdrLKg5kPt6G0chK+WauMJ0VE3c76QaI4U136YKdlJNqYy/KQHyVMYnO+4MbWxoMZrz9Ogqqqo6d0Zk+yysRes2G2Os8xKr0iD2iXwXqpRU+TbnqHKWUqNWtbmqyH5No+khhrLH601UqW5Z0iA01QpN76zKfc8OC1XOKu0XqjVb8qIT69Qavh/VRa7muVLnIMY2d/mDaVUtE3seeCtVDoBJs6rizGBZ6SNVYUrGil+fc5XC02cAXqXrCN9HMuVqCplaK6ty99K4W6reQl2ijqqhzACdYU18HlyXMwAHoC4v0lovOHuNqctLug3D6jaqyhr0tapIC1XOCyoJ+6TYAy4+zquc6ir21chxFtI+SMpYZNaq+TyOyFq19c2o6vtqpUyRPUywx7hOvc9QpcpYU/YjtFa2XYXiNfqN6q3s6t6olq3FuAfgQc/7HV58TbR62Gi8cz3tV/rOinZOri2aZYWP71X7jS5Vy+x53Fkp3kXKNlW1wdBdP+2saOooMwdlapv6mMS59Zeq0yZQRV8aFr4Fx46m0zywfmaRPri2g9g352VrPz4RlDPG3/NTgBgOtTPcqQ5qMPhpk//89BTwg/j8bPVzuM4T65XeA1zp7cqV3lld6U3gld6vAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALj9BuaEJsT6NVNjAAAAAElFTkSuQmCC"
              alt="CAPMINDS"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <div isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/signup">Signup</Link>
              </NavItem>
              <NavItem>
                <Link to="/login">Login</Link>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
