import { useState } from "react"
import ChannelSidebar from "./ChannelSidebar"
import rickRoll from "../assets/rickroll.gif"

export default function ChannelFireship() {
  const [currentChannel, setCurrentChannel] = useState("general")
  return (
    <div className="grid grid-cols-[240px_1fr] bg-bgTertiary ">
      <ChannelSidebar
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
        serverName="Fireship"
        channels={["general"]}
      />
      <div>
        <img className="w-full" src={rickRoll} alt="rickroll" />
      </div>
    </div>
  )
}
