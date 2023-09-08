// import './App.css';
import React, { useState } from "react";
// import { Container } from "./components/Sign Up/style";

// import Google from "./assets/icons/Google.png";
// import Facebook from "./assets/icons/Facebook.png";
// import In from "./assets/icons/In.png";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  // const [isToggled, setIstoogled] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = (a) => {
    setIsSignUp(a);
  };

  return (
    <>
      {isSignUp ? (
        // Pass the toggle function as a prop to SignUp
        <SignUp toggleSignUp={toggleSignUp} />
      ) : (
        // Pass the toggle function as a prop to App
        <Login toggleSignUp={toggleSignUp} />
      )}
    </>
  )
  // <div
  //   style={{
  //     display: "flex",
  //     justifyContent: "center",
  //     background: "#39ace7",
  //   }}>
  //   <Container>
  //     <Container.Card>
  //       <Container.Title>LOGIN</Container.Title>
  //       <Container.EmailTitle>Email</Container.EmailTitle>
  //       <Container.Email></Container.Email>
  //       <Container.PasswordTitle>PASSWORD</Container.PasswordTitle>
  //       <Container.Password></Container.Password>
  //       <Container.Button>LOGIN</Container.Button>

  //       <Container.Line>
  //         <Container.LeftLine> </Container.LeftLine>
  //         <Container.Text>OR</Container.Text>
  //         <Container.RightLine> </Container.RightLine>
  //       </Container.Line>

  //       <Container.Social>
  //         <Container.GoogleIcon src={Google} alt="image" />
  //         <Container.FacebookIcon src={Facebook} alt="image" />
  //         <Container.InIcon src={In} alt="image" />
  //       </Container.Social>

  //       <Container.LinkSection>
  //         <Container.LinkText>Already a user? </Container.LinkText>
  //         <Container.Link onClick={()=> setIstoogled(!isToggled)}>SIGN UP</Container.Link>
  //         {/* {isToggled && <App/>} */}

  //         {/* {isToggled ? <App/> : <SignUp/>} */}
  //       </Container.LinkSection>
  //     </Container.Card>
  //   </Container>
  //   {isToggled && <App/>}
  //   {/* {isToggled ?  <SignUp/> : <App/>} */}
  //   {/* {isToggled ? <App/> : <SignUp/>} */}
  // </div>
}

export default App;
