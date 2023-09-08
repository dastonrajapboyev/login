import React from "react";
import { Container } from "./style";

import Google from "../../assets/icons/Google.png";
import Facebook from "../../assets/icons/Facebook.png";
import In from "../../assets/icons/In.png";

function Login(props) {

  return (
    <Container>
      <Container.Card>
        <Container.Title>LOGIN</Container.Title>
        <Container.EmailTitle>Email</Container.EmailTitle>
        <Container.Email></Container.Email>
        <Container.PasswordTitle>PASSWORD</Container.PasswordTitle>
        <Container.Password></Container.Password>
        <Container.CheckSection>
          <Container.Checkbox type="Checkbox" />
          <Container.CheckText>Remember me?</Container.CheckText>
        </Container.CheckSection>
        <Container.Button >SIGN UP</Container.Button>

        <Container.Forgot>Forgot passwword?</Container.Forgot>

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
          <Container.LinkText>Need an account </Container.LinkText>
          <Container.Link onClick={()=> props.toggleSignUp(true)}>SIGN UP</Container.Link>
        </Container.LinkSection>
      </Container.Card>
    </Container>
  );
}

export default Login;
