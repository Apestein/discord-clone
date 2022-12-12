import React, { useState } from "react"
import styled from "styled-components"
import { ReactComponent as QR } from "../assets/qr-code.svg"
import bgImg from "../assets/bg.svg"

export default function App() {
  return (
    <Bg>
      <div>
        <div>
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
          <form>
            <label>
              EMAIL OR PHONE NUMBER*
              <input />
            </label>
            <label>
              PASSWORD* <input />
            </label>
            <>Forgot your password?</>
            <button>Log In</button>
            <p>
              Need an account? <a>Register</a>
            </p>
          </form>
        </div>
        <div>
          <StyledQR />
          <h3>Log in with QR code</h3>
          <p>Scan this with the Discord mobile app to log in instantly.</p>
        </div>
      </div>
    </Bg>
  )
}

const Bg = styled.div`
  min-height: inherit;
  background-image: url(${bgImg});
`
const StyledQR = styled(QR)`
  max-width: 176px;
  height: fit-content;
`
