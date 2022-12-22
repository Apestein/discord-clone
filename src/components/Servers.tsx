import { Outlet } from "react-router-dom"
import styles from "../styles/Channels.module.css"
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg"
import { ReactComponent as PlusLogo } from "../assets/plus.svg"
import { ReactComponent as CompassLogo } from "../assets/compass.svg"
import { ReactComponent as DownloadLogo } from "../assets/download.svg"
import topLogo from "../assets/top.webp"
import { useState } from "react"

export default function Servers() {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <DiscordLogo className={styles.discordLogo} />
        <div className={styles.divider}></div>
        <img className={styles.channelLogo} src={topLogo} alt="TOP" />
        <PlusLogo className={styles.logo} />
        <CompassLogo className={styles.logo} />
        <DownloadLogo className={styles.logo} />
      </nav>
      <Outlet />
    </div>
  )
}
