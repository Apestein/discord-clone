import React from "react"
import styled from "styled-components"
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg"

export default function Channels() {
  return (
    <Container>
      <SideBar>
        <DiscordLogoSC />
        <i>B</i>
        <i>C</i>
      </SideBar>
    </Container>
  )
}

const Container = styled.div`
  min-height: inherit;
`
const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  position: fixed;
  width: 72px;
  background-color: #202225;
  color: white;
`
const DiscordLogoSC = styled(DiscordLogo)`
  border-radius: 500%;
`
