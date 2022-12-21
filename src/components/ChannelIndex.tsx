import { ReactComponent as FriendsIcon } from "../assets/friends.svg"
import { ReactComponent as MessageIcon } from "../assets/message.svg"
import { ReactComponent as InboxIcon } from "../assets/inbox.svg"
import { ReactComponent as HelpIcon } from "../assets/help.svg"
import { ReactComponent as Wumpus } from "../assets/wumpus.svg"
import styles from "../styles/ChannelIndex.module.css"

export default function ChannelIndex() {
  return (
    <>
      <nav className={styles.mainNav}>
        <div className={styles.navFriendWrapper}>
          <div className={styles.innerFriendWrapper}>
            <FriendsIcon /> <p className={styles.friendWord}>Friends</p>{" "}
          </div>
          <div className={styles.divider}></div>
          <div className={styles.navStatusWrapper}>
            <p className={styles.onlineWord}>Online</p>
            <p>All</p>
            <p>Pending</p>
            <p>Blocked</p>
            <p className={styles.addFriendWord}>Add Friend</p>
          </div>
        </div>
        <div className={styles.navIconWrapper}>
          <MessageIcon />
          <div className={styles.divider}></div>
          <InboxIcon />
          <HelpIcon />
        </div>
      </nav>
      <div className={styles.wumpusWrapper}>
        <Wumpus />
        <p>No one's around to play with Wumpus.</p>
      </div>
    </>
  )
}
