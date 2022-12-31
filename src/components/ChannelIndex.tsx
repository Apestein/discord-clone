import { ReactComponent as FriendsIcon } from "../assets/friends.svg"
import { ReactComponent as MessageIcon } from "../assets/message.svg"
import { ReactComponent as InboxIcon } from "../assets/inbox.svg"
import { ReactComponent as HelpIcon } from "../assets/help.svg"
import { ReactComponent as Wumpus } from "../assets/wumpus.svg"
import IndexSidebar from "./IndexSidebar"

export default function ChannelIndex() {
  return (
    <div className="grid grid-cols-[240px_1fr] bg-bgTertiary ">
      <IndexSidebar />
      <div className="relative overflow-hidden">
        <nav className="flex h-12 items-center justify-between border-b-2 border-[#00000050] py-2 px-4 text-[15px] text-txtPrimary ">
          <div className="flex w-0 flex-auto items-center gap-4 overflow-hidden whitespace-nowrap ">
            <div className="flex items-center gap-2">
              <FriendsIcon /> <p className="text-white">Friends</p>{" "}
            </div>
            <div className="h-6 w-[1px] bg-txtTertiary "></div>
            <div className="flex items-center gap-6">
              <p className="rounded-md bg-txtTertiary py-[2px] px-3 text-white hover:bg-txtTertiary">
                Online
              </p>
              <p className="rounded-md py-[2px] px-3 text-white hover:bg-txtTertiary">
                All
              </p>
              <p className="rounded-md py-[2px] px-3 text-white hover:bg-txtTertiary">
                Pending
              </p>
              <p className="rounded-md py-[2px] px-3 text-white hover:bg-txtTertiary">
                Blocked
              </p>
              <p className="w-max cursor-pointer rounded-md bg-[#2d7d46] py-[2px] px-3 text-white ">
                Add Friend
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 pl-1">
            <MessageIcon />
            <div className="h-6 w-[1px] bg-txtTertiary "></div>
            <InboxIcon />
            <HelpIcon />
          </div>
        </nav>
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-12 text-center text-txtPrimary ">
          <Wumpus />
          <p>No one's around to play with Wumpus.</p>
        </div>
      </div>
    </div>
  )
}
