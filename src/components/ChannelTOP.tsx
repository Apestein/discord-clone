import { useState, useEffect, ReactElement, ReactNode } from "react"
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
import { ReactComponent as EditIcon } from "../assets/edit.svg"
import { ReactComponent as DeleteIcon } from "../assets/delete.svg"
import ChannelSidebar from "./ChannelSidebar"
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  limit,
  getCountFromServer,
  deleteDoc,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import InfiniteScroll from "react-infinite-scroll-component"

export default function ChannelTOP() {
  const auth = getAuth()
  const db = getFirestore()

  type messages = {
    name: string
    uid: string
    message: string
    msgID: string
    photo: string
    ref: any
    timestamp: string
  }
  const [messages, setMessages] = useState<messages[]>([])
  const [msgCollectionSize, setMsgCollectionSize] = useState(0)
  const [currentChannel, setCurrentChannel] = useState("odin-general")
  const [userID, setUserID] = useState("#")
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
    const unsub = getMessages(25, 0)
    console.log("subbed")
    return () => {
      unsub()
      console.log("unsubbed")
    }
  }, [currentChannel])

  useEffect(() => {
    getCollectionSize()
  }, [messages])

  useEffect(() => {
    // deleteSpam()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid)
      } else {
        console.log("no user")
      }
    })
  }, [])

  async function sendMessage(event: any) {
    try {
      event.preventDefault()
      if (!event.target[0]?.value) return
      const docRef = await addDoc(
        collection(db, "TOP", currentChannel, "messages"),
        {
          name: auth.currentUser?.displayName,
          uid: userID,
          message: event.target[0].value,
          photo: auth.currentUser?.photoURL,
          timestamp: serverTimestamp(),
        }
      )
      event.target[0].value = ""
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  async function getCollectionSize() {
    const countQuery = collection(db, "TOP", currentChannel, "messages")
    const countSnapshot = await getCountFromServer(countQuery)
    setMsgCollectionSize(countSnapshot.data().count)
  }

  function getMessages(initialNumberOfMessages: number, num: number) {
    const msgQuery = query(
      collection(db, "TOP", currentChannel, "messages"),
      orderBy("timestamp", "desc"),
      limit(initialNumberOfMessages + num)
    )
    const unsub = onSnapshot(msgQuery, (snapshot) => {
      const dbMessages: any = []
      snapshot.forEach((doc) => {
        const dbOneMessage = doc.data()
        const msgObj = {
          name: dbOneMessage.name,
          uid: dbOneMessage.uid,
          message: dbOneMessage.message,
          msgID: crypto.randomUUID(),
          photo: dbOneMessage.photo,
          ref: doc.ref,
          timestamp: new Date(
            dbOneMessage.timestamp?.seconds * 1000
          ).toLocaleString(),
        }
        dbMessages.push(msgObj)
      })
      if (dbMessages.length) setMessages(dbMessages)
    })
    return unsub
  }

  function handleEdit(msgID: string) {
    const el = document.getElementById(msgID)
    el?.toggleAttribute("contentEditable")
    el?.focus()
    el?.classList.toggle("bg-bgPrimary")
  }

  function handleDocUpdate(docRef: any, event: any) {
    event.preventDefault()
    updateDoc(docRef, { message: event.target.textContent })
  }

  function handleSubmitOrCancel(message: messages, e: any) {
    const previousValue = e.currentTarget.dataset.default
    if (e.key === "Escape" || e.key === "Enter") handleEdit(message.msgID)
    if (e.key === "Enter") {
      handleDocUpdate(message.ref, e)
    } else if (e.key === "Escape") e.currentTarget.textContent = previousValue!
  }

  function setInputHeight(e: any) {
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px"
  }

  function handleSubmit(e: any) {
    if (e.key !== "Enter") return
    e.preventDefault()
    e.target.form.requestSubmit()
    e.target.toggleAttribute("disabled")
    setTimeout(function () {
      e.target.toggleAttribute("disabled")
    }, 5000)
  }

  async function deleteSpam() {
    const q = query(
      collection(db, "TOP/odin-general/messages"),
      where("name", "==", "mishu@gmail.com")
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => deleteDoc(doc.ref))
  }

  return (
    <div className="grid grid-cols-[240px_1fr] bg-bgTertiary ">
      <ChannelSidebar
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
        serverName="The Odin Project"
        channels={["odin-general", "odin-offtopic"]}
      />
      <div className="flex max-h-screen flex-col">
        <div className="flex h-12 items-center border-b-2 border-[#00000050] p-3 text-txtPrimary">
          <div className="flex w-0 flex-auto items-center gap-2 overflow-hidden whitespace-nowrap text-sm">
            <AtIcon className="min-w-fit" />
            <p className="font-bold text-white">{currentChannel}</p>
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
        <div
          id="scrollableDiv"
          className="overflow-anchor ml-3 flex flex-auto flex-col-reverse overflow-auto"
        >
          <InfiniteScroll
            className="flex flex-col-reverse"
            dataLength={messages.length}
            next={() => setTimeout(getMessages, 1000, messages.length, 25)}
            hasMore={messages.length >= msgCollectionSize ? false : true}
            loader={<h4>Loading...</h4>}
            inverse={true}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p className="text-center text-txtPrimary">
                <b>You have reached the end of this channel...</b>
              </p>
            }
          >
            {messages.map((msg) => (
              <div
                key={crypto.randomUUID()}
                className="flex gap-3 py-3 text-txtSecondary"
              >
                <img
                  className="h-12 w-12 rounded-full bg-black object-cover "
                  src={msg.photo}
                  alt="user-img"
                />
                <div className="flex-auto">
                  <p>
                    <span className="text-sm font-bold text-white">
                      {msg.name}
                    </span>{" "}
                    <span className="text-[11px] text-txtPrimary ">
                      {msg.timestamp}
                    </span>
                  </p>
                  <div className="flex justify-between">
                    <p
                      onKeyDown={(e) => handleSubmitOrCancel(msg, e)}
                      data-default={msg.message}
                      id={msg.msgID}
                      className="w-full break-words break-all outline-none"
                    >
                      {msg.message}
                    </p>
                    {userID === msg.uid && (
                      <i className=" flex pr-3">
                        <EditIcon
                          className="cursor-pointer hover:scale-125"
                          onClick={() => handleEdit(msg.msgID)}
                        />
                        <DeleteIcon
                          className="cursor-pointer hover:scale-125"
                          onClick={() => deleteDoc(msg.ref)}
                        />
                      </i>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
        <form onSubmit={sendMessage} className="relative top-0 mx-3 mb-5">
          <MsgPlusIcon className="absolute top-[10px] left-3 text-txtPrimary" />
          <textarea
            className="h-11 w-full resize-none rounded-md bg-txtTertiary p-3 pr-36 pl-10 text-sm text-white focus:outline-none disabled:bg-red-600"
            placeholder="Type message here"
            onKeyDown={(e) => handleSubmit(e)}
            onInput={setInputHeight}
            required
            maxLength={1000}
          />
          <div className="absolute top-[10px] right-3 flex gap-3 text-txtPrimary">
            <GiftIcon />
            <GifIcon />
            <StickerIcon />
            <EmojiIcon />
          </div>
        </form>
      </div>
    </div>
  )
}
