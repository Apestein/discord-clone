import React from "react"
import styles from "../styles/Channels.module.css"
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg"
import { ReactComponent as PlusLogo } from "../assets/plus.svg"
import { ReactComponent as CompassLogo } from "../assets/compass.svg"
import { ReactComponent as DownloadLogo } from "../assets/download.svg"
import { ReactComponent as Wumpus } from "../assets/wumpus.svg"
import { ReactComponent as FriendsIcon } from "../assets/friends.svg"
import { ReactComponent as SnowIcon } from "../assets/snowgiving.svg"
import { ReactComponent as NitroIcon } from "../assets/nitro.svg"
import { ReactComponent as MicrophoneIcon } from "../assets/microphone.svg"
import { ReactComponent as HeadphoneIcon } from "../assets/headphone.svg"
import { ReactComponent as GearIcon } from "../assets/gear.svg"
import topLogo from "../assets/top.webp"

export default function Channels() {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <DiscordLogo className={styles.discordLogo} />
        <img className={styles.channelLogo} src={topLogo} alt="TOP" />
        <PlusLogo className={styles.logo} />
        <CompassLogo className={styles.logo} />
        <DownloadLogo className={styles.logo} />
      </nav>
      <div className={styles.sidebar2}>
        <input placeholder="Find or start a conversation" />
        <div className={styles.iconWrapper}>
          <FriendsIcon />
          Friends
        </div>
        <div className={styles.iconWrapper}>
          <SnowIcon />
          Snowgiving
        </div>
        <div className={styles.iconWrapper}>
          <NitroIcon />
          Nitro
        </div>
        <div className={styles.dmWrapper}>
          <p>DIRECT MESSAGES</p>
          <p>+</p>
        </div>
        <div className={styles.dmListWrapper}>
          <img className={styles.odinBot} alt="odin-bot" src={topLogo} />
          <div className={styles.onlineStatus} />
          odin-bot
        </div>
        <div className={styles.userWrapper}>
          <div className={styles.dmListWrapper}>
            <img className={styles.odinBot} alt="odin-bot" src={topLogo} />
            <div className={styles.onlineStatus} />
          </div>
          <div>
            <strong>Odin Student</strong>
            <p>#0000</p>
          </div>
          <MicrophoneIcon />
          <HeadphoneIcon />
          <GearIcon />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.wumpusWrapper}>
          <Wumpus />
          <p>No one's around to play with Wumpus.</p>
        </div>
      </div>
    </div>
  )
}
