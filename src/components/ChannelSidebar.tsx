import { ReactComponent as BoostIcon } from "../assets/boost.svg"
import { ReactComponent as DownIcon } from "../assets/down.svg"
import { ReactComponent as ThreadIcon } from "../assets/thread.svg"
import { ReactComponent as InviteIcon } from "../assets/invite.svg"
import { ReactComponent as FlowerIcon } from "../assets/flower.svg"

export default function ChannelSidebar({ currentChannel, setCurrentChannel }) {
  console.log(currentChannel)

  return (
    <div className="bg-bgSecondary text-txtPrimary">
      <div className="flex items-center gap-1 p-1 h-[48px] border-b-2 border-[#00000050]">
        <div className="relative">
          <FlowerIcon className="absolute scale-75" />
          <BoostIcon />
        </div>
        <p className="pr-10 whitespace-nowrap font-bold text-[15px] text-white">
          The Odin Project
        </p>
        <DownIcon className="scale-50" />
      </div>
      <div className="flex items-center text-xs ">
        <DownIcon className="scale-50 w-10" />
        <p>THE ODIN PROJECT</p>
      </div>
      <div
        className={`flex items-center gap-2 mx-1 p-1 rounded-md text-sm font-semibold hover:bg-txtTertiary hover:text-white mb-1`}
      >
        <ThreadIcon />
        <button onClick={() => setCurrentChannel("odin-general")}>
          odin-general
        </button>
        <InviteIcon className="ml-auto" />
      </div>
      <div className="flex items-center gap-2 mx-1 p-1 rounded-md text-sm font-semibold hover:bg-txtTertiary hover:text-white mb-1">
        <ThreadIcon />
        <button onClick={() => setCurrentChannel("odin-offtopic")}>
          odin-offtopic
        </button>
        <InviteIcon className="ml-auto" />
      </div>
    </div>
  )
}
