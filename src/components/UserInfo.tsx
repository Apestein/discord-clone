import { ReactComponent as MicrophoneIcon } from "../assets/microphone.svg"
import { ReactComponent as HeadphoneIcon } from "../assets/headphone.svg"
import { ReactComponent as GearIcon } from "../assets/gear.svg"
import { auth } from "./App"

export default function UserInfo() {
  const userName = auth.currentUser?.displayName
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-center gap-2 bg-bgQuaternary p-1 ">
      <div className="relative">
        <img
          className="h-8 w-8 rounded-full object-cover"
          alt="user-img"
          src={auth.currentUser?.photoURL || "#"}
        />
        <div className="absolute right-0 bottom-0 h-[13px] w-[13px] rounded-full border-2 border-bgSecondary bg-[#3ba55d] " />
      </div>
      <div className="w-[12ch] overflow-hidden text-ellipsis whitespace-nowrap">
        <strong className="text-sm text-white">{userName}</strong>
        <p className="pb-2 text-xs leading-[6px]">
          #{auth.currentUser?.uid.slice(0, 5)}
        </p>
      </div>
      <MicrophoneIcon />
      <HeadphoneIcon />
      <GearIcon />
    </div>
  )
}
