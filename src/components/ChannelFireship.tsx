import { useState } from "react"
import ChannelSidebar from "./ChannelSidebar"
import Loader from "./Loader"

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
      <div className="flex flex-col items-center justify-center gap-5 text-txtPrimary">
        <h1 className="text-xl">Under Construction</h1>
        <Loader />
      </div>
    </div>
  )
}
