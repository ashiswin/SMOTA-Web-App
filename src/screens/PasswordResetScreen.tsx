import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { Button, Col, Container, Row, TextInput } from "react-materialize";
import SuccessMessage from "../components/SuccessMessage";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const PasswordResetScreen = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setErrorVisible(false);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
        setErrorVisible(true);
      });
  };

  return (
    <Container>
      <Row style={{ marginTop: 16 }}>
        <Col s={12} style={{ textAlign: "center" }}>
          <h5>Reset your password</h5>
        </Col>
      </Row>
      <form action="">
        <Row style={{marginBottom: 16}}>
          <SuccessMessage message={"An email has been sent to you!"} visible={emailHasBeenSent} onCloseClick={() => setEmailHasBeenSent(false)} />
        </Row>
        <Row style={{marginBottom: 16}}>
          <ErrorMessage message={error} visible={errorVisible} onCloseClick={() => setErrorVisible(false)} />
        </Row>
        <TextInput name="email" label="Email" type="email" onChange={onChangeHandler} value={email} email noLayout />
        <Button
          onClick={sendResetEmail}
          style={{ width: '100%' }}
          className="waves-effect green">
          Send me a reset link
        </Button>
      </form>
      <p>
        <Link
          to ="/signin"
        >
          &larr; Back to sign in page
        </Link>
      </p>
    </Container>
  );
};
export default PasswordResetScreen;