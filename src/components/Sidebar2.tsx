import styles from "../styles/Sidebar2.module.css"
import { ReactComponent as FriendsIcon } from "../assets/friends.svg"
import { ReactComponent as SnowIcon } from "../assets/snowgiving.svg"
import { ReactComponent as NitroIcon } from "../assets/nitro.svg"
import { ReactComponent as MicrophoneIcon } from "../assets/microphone.svg"
import { ReactComponent as HeadphoneIcon } from "../assets/headphone.svg"
import { ReactComponent as GearIcon } from "../assets/gear.svg"
import topLogo from "../assets/top.webp"

export default function Sidebar2() {
  return (
    <div className={styles.sidebar2}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.sidebarInput}
          placeholder="Find or start a conversation"
        />
      </div>
      <div className={`${styles.iconWrapper} ${styles.friendsWord}`}>
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
        <p className={styles.dmPlus}>+</p>
      </div>
      <div className={styles.dmListWrapper}>
        <div className={styles.statusImageWrapper}>
          <img className={styles.odinBot} alt="odin-bot" src={topLogo} />
          <div className={styles.onlineStatus} />
        </div>
        <p>odin-bot</p>
      </div>
      <div className={styles.userWrapper}>
        <div className={styles.statusImageWrapper}>
          <img className={styles.odinBot} alt="odin-bot" src={topLogo} />
          <div className={styles.onlineStatus} />
        </div>
        <div>
          <strong className={styles.userName}>Odin Student</strong>
          <p className={styles.userId}>#0000</p>
        </div>
        <MicrophoneIcon />
        <HeadphoneIcon />
        <GearIcon />
      </div>
    </div>
  )
}
