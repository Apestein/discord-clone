import { ReactComponent as FriendsIcon } from "../assets/friends.svg"
import { ReactComponent as SnowIcon } from "../assets/snowgiving.svg"
import { ReactComponent as NitroIcon } from "../assets/nitro.svg"
import topLogo from "../assets/top.webp"
import UserInfo from "./UserInfo"

export default function IndexSidebar() {
  return (
    <div className="relative flex flex-col bg-bgSecondary text-txtPrimary ">
      <div className="flex h-12 items-center justify-center border-b-2 border-[#00000050] ">
        <input
          className="m-2 h-7 w-full rounded-sm border-none bg-bgPrimary p-2 text-sm focus:outline-none "
          placeholder="Find or start a conversation"
        />
      </div>
      <label className="label-has m-2 flex items-center gap-4 rounded-sm p-1 hover:bg-txtTertiary hover:text-white">
        <input
          className="hidden"
          type="radio"
          name="sidebar-nav"
          defaultChecked
        />
        <FriendsIcon />
        Friends
      </label>
      <label className="label-has m-2 flex items-center gap-4 rounded-sm p-1 hover:bg-txtTertiary hover:text-white">
        <input className="hidden" type="radio" name="sidebar-nav" />
        <SnowIcon />
        Snowgiving
      </label>
      <label className="label-has m-2 flex items-center gap-4 rounded-sm p-1 hover:bg-txtTertiary hover:text-white">
        <input className="hidden" type="radio" name="sidebar-nav" />
        <NitroIcon />
        Nitro
      </label>
      <div className="m-2 flex items-center justify-between pr-7 text-xs ">
        <p>DIRECT MESSAGES</p>
        <p className="text-xl">+</p>
      </div>
      <div className="relative m-2 flex items-center gap-2 ">
        <div className="relative">
          <img className="w-8 rounded-full " alt="odin-bot" src={topLogo} />
          <div className="absolute right-0 bottom-0 h-[13px] w-[13px] rounded-full border-2 border-bgSecondary bg-[#3ba55d] " />
        </div>
        <p>odin-bot</p>
      </div>
      <UserInfo />
    </div>
  )
}
