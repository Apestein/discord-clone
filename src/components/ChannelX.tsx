import React from "react"
import "../styles/ChannelX.css"
import { ReactComponent as AtIcon } from "../assets/@.svg"
import { ReactComponent as ThreadIcon } from "../assets/thread.svg"
import { ReactComponent as BellIcon } from "../assets/bell.svg"
import { ReactComponent as PinIcon } from "../assets/pin.svg"
import { ReactComponent as MembersIcon } from "../assets/members.svg"
import { ReactComponent as InboxIcon } from "../assets/inbox.svg"
import { ReactComponent as HelpIcon } from "../assets/help.svg"

export default function ChannelX() {
  return (
    <>
      <div className="app_header">
        <div className="app_wrapper1">
          <AtIcon className="app_at-icon" />
          <p className="">odin-offtopic</p>
          <div className="app_divider"></div>
          <p className="app_promo">
            No self promotion, asking for help should go in the proper help
            channel. off-topic is for relaxing, not asking help questions. Not a
            meme channel.
          </p>
        </div>
        <ThreadIcon />
        <BellIcon />
        <PinIcon />
        <MembersIcon />
        <input type="search" placeholder="Search" />
        <InboxIcon />
        <HelpIcon />
      </div>
    </>
  )
}
