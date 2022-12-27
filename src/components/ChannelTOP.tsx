import { useState, useEffect, SyntheticEvent } from "react"
import { ReactComponent as AtIcon } from "../assets/@.svg"
import { ReactComponent as ThreadIcon } from "../assets/thread.svg"
import { ReactComponent as BellIcon } from "../assets/bell.svg"
import { ReactComponent as PinIcon } from "../assets/pin.svg"
import { ReactComponent as MembersIcon } from "../assets/members.svg"
import { ReactComponent as InboxIcon } from "../assets/inbox.svg"
import { ReactComponent as HelpIcon } from "../assets/help.svg"
import { ReactComponent as SearchIcon } from "../assets/search.svg"
import { ReactComponent as MsgPlusIcon } from "../assets/msgplus.svg"
import { ReactComponent as GiftIcon } from "../assets/gift.svg"
import { ReactComponent as GifIcon } from "../assets/gif.svg"
import { ReactComponent as StickerIcon } from "../assets/sticker.svg"
import { ReactComponent as EmojiIcon } from "../assets/emoji.svg"
import topImg from "../assets/top.webp"
import ChannelSidebar from "./ChannelSidebar"
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore/lite"

const db = getFirestore()

export default function ChannelTOP() {
  const msgArray = [
    { name: "Odin Student", message: "hello world!", time: "Today at 5:00 AM" },
    {
      name: "Odin Student2",
      message: "hello TOP",
      time: "Today at 5:00 AM",
    },
  ]
  const [messages, setMessages] = useState(msgArray)
  const [currentChannel, setCurrentChannel] = useState("odin-general")
  const currentChannelName =
    currentChannel === "odin-general" ? "odin-general" : "odin-offtopic"
  const channelDescription =
    currentChannel === "odin-general" ? (
      <>
        <span>
          Discussion related to The Odin Project (TOP) or Programming related to
          TOP |
        </span>{" "}
        <a
          className="text-blue-500 underline"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          https://www.dontasktoask.com/
        </a>{" "}
        <span>| </span>
        <a
          className="text-blue-500 underline"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603
        </a>
      </>
    ) : (
      " No self promotion, asking for help should go in the proper help channel. off-topic is for relaxing, not asking help questions. Not a meme channel."
    )

  async function sendMessage(event: any) {
    try {
      event.preventDefault()
      event.target[0].value = ""
      const docRef = await addDoc(
        collection(db, "TOP", currentChannel, "message"),
        {
          name: "Ada",
          message: "Lovelace",
          time: serverTimestamp(),
        }
      )
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  async function getMessages() {
    try {
    } catch (error) {}
  }

  return (
    <div className="grid grid-cols-[240px_1fr] bg-bgTertiary ">
      <ChannelSidebar
        setCurrentChannel={setCurrentChannel}
        serverName="The Odin Project"
        channels={["odin-general", "odin-offtopic"]}
      />
      <div className="flex flex-col">
        <div className="flex h-12 items-center border-b-2 border-[#00000050] p-3 text-txtPrimary">
          <div className="flex w-0 flex-auto items-center gap-3 overflow-hidden whitespace-nowrap text-sm">
            <AtIcon className="min-w-fit" />
            <p className="font-bold text-white">{currentChannelName}</p>
            <div className="h-6 w-[1px] bg-txtTertiary"></div>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {channelDescription}
            </p>
          </div>
          <div className="flex gap-3">
            <ThreadIcon />
            <BellIcon />
            <PinIcon />
            <MembersIcon />
            <div className="relative flex">
              <input
                className="h-6 rounded-sm bg-bgPrimary p-1 text-xs focus:outline-none"
                type="search"
                placeholder="Search"
              />
              <SearchIcon className="absolute right-0 p-1" />
            </div>
            <InboxIcon />
            <HelpIcon />
          </div>
        </div>
        <div className="my-0 mx-3 mb-6 flex flex-auto flex-col-reverse">
          <form onSubmit={sendMessage} className="relative w-full">
            <MsgPlusIcon className="absolute top-1/4 left-3 text-txtPrimary" />
            <input
              className="h-11 w-full rounded-md bg-txtTertiary pl-10 text-sm text-white focus:outline-none"
              placeholder="Type message here"
            />
            <div className="absolute top-1/4 right-[2%] flex gap-3 text-txtPrimary">
              <GiftIcon />
              <GifIcon />
              <StickerIcon />
              <EmojiIcon />
            </div>
          </form>
          {msgArray.map((msg) => (
            <div
              key={crypto.randomUUID()}
              className="flex gap-3 py-3 text-txtSecondary"
            >
              <img
                className="h-10 w-10 rounded-full"
                src={topImg}
                alt="top-img"
              />
              <div>
                <p>
                  <span className="text-sm font-bold text-white">
                    {msg.name}
                  </span>{" "}
                  <span className="text-[11px] text-txtPrimary ">
                    {msg.time}
                  </span>
                </p>
                <p className="break-words">{msg.message} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
