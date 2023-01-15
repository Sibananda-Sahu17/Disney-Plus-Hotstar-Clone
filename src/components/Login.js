import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to the Movie for an additional fee with a Disney+ Subcription.
            Get Premier Access to the Movie for an additional fee with a Disney+ Subcription.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 4rem);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 40rem;
    padding: 4rem 2rem;
    width: 80%;
    display: flex;
    flex-direction: column;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.div`
    // width: 100%
    background-color: #0063e5;
    font-weight: bold;
    padding: 1rem 0;
    border-radius: 0.3rem;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.2px;
    margin: 0.5rem 0;

    &:hover{
      background: #0483ee;
    }
`
const Description = styled.p`
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
    margin: 1rem 0;
`