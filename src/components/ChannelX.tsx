import React from "react"
import "../styles/ChannelX.scss"
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

export default function ChannelX() {
  return (
    <div className="channelx_container">
      <div className="channelx_header">
        <div className="channelx_wrapper1">
          <AtIcon className="channelx_at-icon" />
          <p className="channelx_p-wrapper1">odin-offtopic</p>
          <div className="channelx_divider"></div>
          <p className="channelx_promo">
            No self promotion, asking for help should go in the proper help
            channel. off-topic is for relaxing, not asking help questions. Not a
            meme channel.
          </p>
        </div>
        <ThreadIcon />
        <BellIcon />
        <PinIcon />
        <MembersIcon />
        <div className="channelx_search-wrapper">
          <input
            className="channelx_search-input"
            type="search"
            placeholder="Search"
          />
          <SearchIcon className="channelx_search-icon" />
        </div>
        <InboxIcon />
        <HelpIcon />
      </div>
      <div className="channelx_msg-container">
        <div className="channelx_input-wrapper">
          <MsgPlusIcon className="channelx_msgplus-icon" />
          <input
            className="channelx_msg-input"
            placeholder="Type message here"
          />
          <div className="channelx_icons-wrapper">
            <GiftIcon />
            <GifIcon />
            <StickerIcon />
            <EmojiIcon />
          </div>
        </div>
      </div>
    </div>
  )
}