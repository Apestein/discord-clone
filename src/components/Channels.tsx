import React from "react"
import styled, { css } from "styled-components"
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg"
import { ReactComponent as PlusLogo } from "../assets/plus.svg"
import { ReactComponent as CompassLogo } from "../assets/compass.svg"
import { ReactComponent as DownloadLogo } from "../assets/download.svg"
import { ReactComponent as Wumpus } from "../assets/wumpus.svg"
import topLogo from "../assets/top.webp"

export default function Channels() {
  return (
    <Container>
      <SideBar>
        <DiscordLogoSC />
        <TopLogoSC src={topLogo} />
        <PlusLogoSC />
        <CompassLogoSC />
        <DownloadLogoSC />
      </SideBar>
      <SideBar2>Odin-bot</SideBar2>
      <MainContent>
        <Wrapper>
          <Wumpus />
          <p>No one's around to play with Wumpus.</p>
        </Wrapper>
      </MainContent>
    </Container>
  )
}

const logoStyle = css`
  box-sizing: content-box;
  padding: 12px;
  border-radius: 50%;
  background-color: #4f545c;
  color: #3ba55d;
`
const Container = styled.div`
  font-family: sans-serif;
  min-height: inherit;
  display: flex;
  color: white;
`
const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  width: 72px;
  gap: 10px;
  background-color: #202225;
  align-items: center;
`
const SideBar2 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  width: 240px;
  background-color: #2f3136;
`
const MainContent = styled.div`
  position: relative;
  flex: 1 1 auto;
  background-color: #36393f;
`
const DiscordLogoSC = styled(DiscordLogo)`
  border-radius: 50%;
`
const TopLogoSC = styled.img`
  width: 48px;
  border-radius: 50%;
`
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #8e9297;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
const PlusLogoSC = styled(PlusLogo)`
  ${logoStyle}
`
const CompassLogoSC = styled(CompassLogo)`
  ${logoStyle}
`
const DownloadLogoSC = styled(DownloadLogo)`
  ${logoStyle}
`
