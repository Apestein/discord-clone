import React from "react"
import { ReactComponent as AtIcon } from "../assets/@.svg"
import { ReactComponent as ThreadIcon } from "../assets/thread.svg"
import { ReactComponent as BellIcon } from "../assets/bell.svg"
import { ReactComponent as PinIcon } from "../assets/pin.svg"
import { ReactComponent as MembersIcon } from "../assets/members.svg"

export default function ChannelX() {
  return (
    <>
      <div className="h-[48px] border-b-2 border-[#00000050] flex">
        <AtIcon />
        <ThreadIcon />
        <BellIcon />
        <PinIcon />
        <MembersIcon />
      </div>
    </>
  )
}
