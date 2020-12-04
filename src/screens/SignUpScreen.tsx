import React, { useState } from "react";
import { Button, Col, Container, Row, TextInput } from "react-materialize";
import smota_logo from "../assets/img/smota-logo.png";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const createUserWithEmailAndPasswordHandler = (event: React.MouseEvent<HTMLButtonElement>, name: string, email: string, password: string, confirmPassword: string) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  return (
    <Container>
      <Row style={{ paddingTop: 16 }}>
        <Col s={12} style={{ textAlign: "center" }}>
          <img src={smota_logo} alt="St Mary of the Angels Singapore" />
        </Col>
      </Row>
      <Row style={{ marginTop: -16 }}>
        <Col s={12} style={{ textAlign: "center" }}>
          <h5>Sign up with St Mary's</h5>
        </Col>
      </Row>
      <TextInput name="name" label="Name" onChange={onChangeHandler} value={name} noLayout />
      <TextInput name="email" label="Email" type="email" onChange={onChangeHandler} value={email} email noLayout />
      <Row style={{ padding: 0, marginTop: -16 }}>
        <Col s={6} style={{ paddingLeft: 0 }}>
          <TextInput name="password" label="Password" onChange={onChangeHandler} value={password} password noLayout />
        </Col>
        <Col s={6} style={{ paddingRight: 0 }}>
          <TextInput name="confirmPassword" label="Confirm Password" onChange={onChangeHandler} value={confirmPassword} password noLayout />
        </Col>
      </Row>
      <Button
        onClick={(event) => {
          createUserWithEmailAndPasswordHandler(event, name, email, password, confirmPassword)
        }}
        style={{ width: '100%' }}
        className="waves-effect green">
        Sign Up
      </Button>
    </Container>
  )
}

export default SignUpScreen;