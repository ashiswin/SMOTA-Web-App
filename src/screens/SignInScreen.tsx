import React, { useState } from "react";
import { Button, Col, Container, Row, TextInput } from "react-materialize";
import { Link } from "react-router-dom";
import smota_logo from "../assets/img/smota-logo.png";
import ErrorMessage from "../components/ErrorMessage";
import { auth } from "../firebase";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const signInWithEmailAndPasswordHandler = async (event: React.MouseEvent<HTMLButtonElement>, email: string, password: string) => {
    event.preventDefault();
    if (email === "") {
      setError("Email is empty");
      setErrorVisible(true);
      return;
    }
    if (password === "") {
      setError("Password is empty");
      setErrorVisible(true);
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      window.location.href = "/";

      setEmail("");
      setPassword("");
      setError("");
      setErrorVisible(false);
    }
    catch (error) {
      setError(error.message);
      setErrorVisible(true);
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
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
          <h5>Sign into St Mary's</h5>
        </Col>
      </Row>
      <ErrorMessage message={error} visible={errorVisible} onCloseClick={() => setErrorVisible(false)} />
      <TextInput name="email" label="Email" type="email" onChange={onChangeHandler} value={email} email noLayout />
      <TextInput name="password" label="Password" onChange={onChangeHandler} value={password} password noLayout />
      <Button
        onClick={(event) => {
          signInWithEmailAndPasswordHandler(event, email, password)
        }}
        style={{ width: '100%' }}
        className="waves-effect green">
        Sign In
      </Button>
      <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "/passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
    </Container>
  )
}

export default SignInScreen;