import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTAlogoOne src="/images/cta-logo-one.svg"></CTAlogoOne>
            <SignUp>
                Get All There
            </SignUp>
            <Description>
            The Walt Disney Company is a worldwide entertainment company. The Company's segments include Disney Media and Entertainment Distribution (DMED), and Disney Parks, Experiences and Products (DPEP).
            </Description>
            <CTAlogoTwo src="/images/cta-logo-two.png"></CTAlogoTwo>
        </CTA>
    </Container>
  )
}

export default Login


const Container = styled.div`
height:calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center;
position: relative;
&:before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/login-background.jpg");
    position:absolute;
    content:"";
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:-1;
    opacity:0.7;


}
`


const CTA = styled.div`

max-width:650px;
padding:80px 40px;
width:70%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;
`
const CTAlogoOne = styled.img``


const SignUp = styled.div`
background:#0063e5;
width:100%;
font-weight:bold;
text-transform:uppercase;
padding:17px 0;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover{
    background:#0483ee;
}
`
const Description = styled.div`
font-size:10px;
text-align:center;
line-height:1.5;
letter-spacing:1.5px;

`

const CTAlogoTwo = styled.img`
width:90%;`