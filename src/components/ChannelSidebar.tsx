import { ReactComponent as BoostIcon } from "../assets/boost.svg"
import { ReactComponent as DownIcon } from "../assets/down.svg"
import { ReactComponent as ThreadIcon } from "../assets/thread.svg"
import { ReactComponent as InviteIcon } from "../assets/invite.svg"
import { ReactComponent as FlowerIcon } from "../assets/flower.svg"
import UserInfo from "./UserInfo"

export default function ChannelSidebar({
  setCurrentChannel,
}: {
  setCurrentChannel: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div className="relative flex flex-col bg-bgSecondary text-txtPrimary">
      <div className="flex h-[48px] items-center gap-1 border-b-2 border-[#00000050] p-1">
        <div className="relative">
          <FlowerIcon className="absolute scale-75" />
          <BoostIcon />
        </div>
        <p className="whitespace-nowrap pr-10 text-[15px] font-bold text-white">
          The Odin Project
        </p>
        <DownIcon className="scale-50" />
      </div>
      <div className="flex items-center text-xs ">
        <DownIcon className="w-10 scale-50" />
        <p>THE ODIN PROJECT</p>
      </div>
      <label
        onClick={() => setCurrentChannel("odin-general")}
        className="mx-1 mb-1 flex items-center gap-2 rounded-md p-1 text-sm font-semibold hover:bg-txtTertiary hover:text-white"
      >
        <input className="hidden" type="radio" name="channel" defaultChecked />
        <ThreadIcon />
        odin-general
        <InviteIcon className="ml-auto" />
      </label>
      <label
        onClick={() => setCurrentChannel("odin-offtopic")}
        className="mx-1 mb-1 flex items-center gap-2 rounded-md p-1 text-sm font-semibold hover:bg-txtTertiary hover:text-white"
      >
        <input className="hidden" type="radio" name="channel" />
        <ThreadIcon />
        odin-offtopic
        <InviteIcon className="ml-auto" />
      </label>
      <UserInfo />
    </div>
  )
}
