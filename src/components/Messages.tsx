import { useState, useEffect } from "react"
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
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  getDoc,
} from "firebase/firestore"
import { getAuth } from "firebase/auth"

export default function Messages() {
  type messages = {
    name: string
    message: string
    timestamp: string
  }
  const [messages, setMessages] = useState<messages[]>([])
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

  useEffect(() => {
    const unsub = getMessages()
    return () => {
      unsub()
    }
  }, [])

  async function sendMessage(event: any) {
    try {
      event.preventDefault()
      const docRef = await addDoc(
        collection(db, "TOP", currentChannel, "messages"),
        {
          name: getAuth().currentUser?.displayName,
          message: event.target[0].value,
          timestamp: serverTimestamp(),
        }
      )
      event.target[0].value = ""
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  function getMessages() {
    const msgQuery = query(
      collection(db, "TOP", currentChannel, "messages"),
      orderBy("timestamp", "desc")
    )
    const unsub = onSnapshot(msgQuery, (snapshot) => {
      const dbMessages: any = []
      snapshot.forEach((doc) => {
        const dbOneMessage = doc.data()
        const msgObj = {
          name: dbOneMessage.name,
          message: dbOneMessage.message,
          timestamp: new Date(
            dbOneMessage.timestamp?.seconds * 1000
          ).toTimeString(),
        }
        dbMessages.push(msgObj)
      })
      setMessages(dbMessages)
    })
    return unsub
  }

  return (
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
        {messages.map((msg) => (
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
                <span className="text-sm font-bold text-white">{msg.name}</span>{" "}
                <span className="text-[11px] text-txtPrimary ">
                  {msg.timestamp}
                </span>
              </p>
              <p className="break-words">{msg.message} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
