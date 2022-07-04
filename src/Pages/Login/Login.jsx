import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import loginUser from "../../Assets/Images/login_user.svg";
import { loginAction } from "../../Store/Auth/actions";

const Login = () => {
  const disptach = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    disptach(loginAction({ email, password }));
  };

  return (
    <div className="loginContainer">
      <Card className="loginCard">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="circle">
              <img src={loginUser} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="">
            <h2>Redirection</h2>
            <h4>Login</h4>
            <div>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                disabled={!(email && password)}
                onClick={() => handleLogin()}
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
