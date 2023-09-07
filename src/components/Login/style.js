// import styled from 'styled-components'
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;
Container.Card = styled.div`
  padding: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  background-color: #fff;
`;
Container.Title = styled.h1``;
Container.EmailTitle = styled.h3`
  margin-top: 20px;
`;
Container.Email = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #181818;
  outline: none;
`;
Container.PasswordTitle = styled.h3`
  margin-top: 30px;
`;
Container.Password = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #181818;
  outline: none;
`;

Container.CheckSection = styled.div`
display: flex;
gap: 10px;
margin-top: 10px;
font-size: 18px;
`

Container.Checkbox = styled.input`
color: #e53f71;
align-items: start;
`
Container.CheckText = styled.p`

`

Container.Button = styled.button`
width: 300px;
  background-color: #e53f71;
  border: none;
  color: #fff;
  border-radius: 5px;
  margin-top: 30px;
  padding: 10px;
`;

Container.Forgot = styled.p`
margin: 10px 0 0 180px;
font-size: 16px;
`

Container.Line = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
Container.LeftLine = styled.span`
  height: 1px;
  width: 140px;
  background-color: #181818;
`;
Container.Text = styled.p`
  color: #181818;
  padding: 8px;
  border: 1px solid #181818;
  border-radius: 4px;
`;

Container.RightLine = styled.span`
  height: 1px;
  width: 140px;
  background-color: #181818;
`;

Container.Social = styled.div`
margin-top: 25px;
display: flex;
justify-content: center;
gap: 30px;
`
Container.GoogleIcon = styled.img`
width: 40px;
`
Container.FacebookIcon = styled.img`
width: 40px;
`
Container.InIcon = styled.img`
width: 40px;
`
Container.LinkSection = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin-top: 24px;
`
Container.LinkText = styled.p`
font-size: 16px;
`

Container.Link = styled.h3`
text-decoration: underline;
`
export { Container };