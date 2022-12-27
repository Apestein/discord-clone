import { ReactComponent as MicrophoneIcon } from "../assets/microphone.svg"
import { ReactComponent as HeadphoneIcon } from "../assets/headphone.svg"
import { ReactComponent as GearIcon } from "../assets/gear.svg"
import topLogo from "../assets/top.webp"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

export default function UserInfo() {
  const [userName, setUserName] = useState("no name")
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid
      if (user.displayName) setUserName(user.displayName)
    } else {
      console.log("no user")
    }
  })
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-center gap-2 bg-bgQuaternary p-1 ">
      <div className="relative">
        <img className="w-8 rounded-full" alt="odin-bot" src={topLogo} />
        <div className="absolute right-0 bottom-0 h-[13px] w-[13px] rounded-full border-2 border-bgSecondary bg-[#3ba55d] " />
      </div>
      <div className="w-[12ch] overflow-hidden text-ellipsis whitespace-nowrap">
        <strong className="text-sm text-white">{userName}</strong>
        <p className="pb-2 text-xs leading-[6px]">#0000</p>
      </div>
      <MicrophoneIcon />
      <HeadphoneIcon />
      <GearIcon />
    </div>
  )
}
