import React, { useState } from "react"
import styled from "styled-components"
import { ReactComponent as QR } from "../assets/qr-code.svg"
import bgImg from "../assets/bg.svg"

export default function App() {
  return (
    <Bg>
      <LoginWrapper>
        <InputWrapper>
          <H3>Welcome back!</H3>
          <GreetMsg>We're so excited to see you again!</GreetMsg>
          <form>
            <LabelWrapper>
              <Label>
                <p>
                  EMAIL OR PHONE NUMBER <Asterisk>*</Asterisk>
                </p>
                <Input title="Please fill out this field." />
              </Label>
              <Label>
                <p>
                  PASSWORD <Asterisk>*</Asterisk>
                </p>
                <Input type="password" title="Please fill out this field." />
              </Label>
            </LabelWrapper>
            <A>Forgot your password?</A>
            <br />
            <Button>Log In</Button>
            <P>
              Need an account? <A>Register</A>
            </P>
          </form>
        </InputWrapper>
        <QRWrapper>
          <StyledQR />
          <h3>Log in with QR code</h3>
          <P>
            Scan this with the <strong>Discord mobile app</strong> to log in
            instantly.
          </P>
        </QRWrapper>
      </LoginWrapper>
    </Bg>
  )
}

const Bg = styled.div`
  position: relative;
  min-height: inherit;
  background-image: url(${bgImg});
  background-size: cover;
`
const LoginWrapper = styled.div`
  outline: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 32px;
  padding: 32px;
  width: 784px;
  background-color: #36393f;
  color: white;
  border-radius: 3px;
`
const H3 = styled.h3`
  font-size: 24px;
  text-align: center;
`
const P = styled.p`
  color: #b9bbbe;
  font-size: 14px;
`
const GreetMsg = styled(P)`
  text-align: center;
`
const A = styled.a`
  color: #00aff4;
  font-size: 13px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  font-size: 12px;
  color: #b9bbbe;
`
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Asterisk = styled.span`
  color: #ed4245;
`
const Input = styled.input`
  min-width: 414px;
  padding: 10px;
  height: 40px;
  border-radius: 3px;
  border: none;
  background-color: #202225;
  color: #b9bbbe;
  font-size: 14px;
`
const Button = styled.button`
  width: 100%;
  height: 44px;
  margin: 10px 0;
  background-color: #5865f2;
  color: white;
  border: none;
  border-radius: 3px;
`
const StyledQR = styled(QR)`
  max-width: 176px;
  height: fit-content;
`
