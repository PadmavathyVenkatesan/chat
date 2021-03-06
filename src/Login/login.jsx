import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./login.css";

import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",

      password: "",

      errors: {},
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {
      console.log(this.state);

      var apiBaseUrl = "http://localhost:8181/chat/User/login.php";

      var data = {
        user_email: this.state.email,

        password: this.state.password,
      };

      console.log(data);

      axios
        .post(apiBaseUrl, data)
        .then(function(response) {
          console.log(response);

          if (response.data.success) {
            localStorage.setItem(
              "u_code",
              encodeURIComponent(JSON.stringify(response.data.data))
            );

            localStorage.setItem("is_done", true);

            console.log("Login successfull");
          } else {
            alert(response.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.email) {
      formIsValid = false;

      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.email !== "undefined") {
      //regular expression for email validation

      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        formIsValid = false;

        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!this.state.password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    if (typeof this.state.password !== "undefined") {
      if (
        !this.state.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;

        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Capminds</h2>

              <Form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    placeholder="Email Id"
                  />

                  <div className="errorMsg">{this.state.errors.email}</div>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Password</Label>

                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    placeholder="Password"
                  />

                  <div className="errorMsg">{this.state.errors.password}</div>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Remember Me
                  </Label>
                </FormGroup>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Button type="submit" className="btn btn-login">
                    Submit
                  </Button>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link to="/signup" className="linka">
                      Sign Up
                    </Link>
                  </div>

                  <div className="d-flex justify-content-center links">
                    <a className="linka">Forgot your password?</a>
                  </div>
                </div>
              </Form>
            </div>

            <div className="col-md-8 banner-sec"></div>
          </div>
        </div>
      </div>
    );
  }
}
