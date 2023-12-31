import React, { useState } from "react";
import { Container } from "./style";

// icons

import Google from "../../assets/icons/Google.png";
import Facebook from "../../assets/icons/Facebook.png";
import In from "../../assets/icons/In.png";



function SignUp(props) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#39ace7",
      }}>
      <Container>
        <Container.Card>
          <Container.Title>SIGN UP</Container.Title>
          <Container.EmailTitle>Email</Container.EmailTitle>
          <Container.Email></Container.Email>
          <Container.PasswordTitle>PASSWORD</Container.PasswordTitle>
          <Container.Password></Container.Password>
          <Container.Button>LOGIN</Container.Button>

          <Container.Line>
            <Container.LeftLine> </Container.LeftLine>
            <Container.Text>OR</Container.Text>
            <Container.RightLine> </Container.RightLine>
          </Container.Line>

          <Container.Social>
            <Container.GoogleIcon src={Google} alt="image" />
            <Container.FacebookIcon src={Facebook} alt="image" />
            <Container.InIcon src={In} alt="image" />
          </Container.Social>

          <Container.LinkSection>
            <Container.LinkText>Need an account? </Container.LinkText>
            <Container.Link onClick={()=> props.toggleSignUp(false)}>LOGIN</Container.Link>
          </Container.LinkSection>
        </Container.Card>
      </Container>
    </div>
  );
}
export default SignUp;
