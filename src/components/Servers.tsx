import { Outlet, useNavigate } from "react-router-dom"
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg"
import { ReactComponent as PlusLogo } from "../assets/plus.svg"
import { ReactComponent as CompassLogo } from "../assets/compass.svg"
import { ReactComponent as DownloadLogo } from "../assets/download.svg"
import topLogo from "../assets/top.webp"
import fireshipLogo from "../assets/fireship.webp"

export default function Servers() {
  const navigate = useNavigate()

  return (
    <div className="grid min-h-[inherit] grid-cols-[72px_1fr] text-white">
      <nav className="flex flex-col items-center gap-[10px] bg-bgPrimary pt-[15px]">
        <label
          onClick={() => navigate("/channels")}
          className="group relative flex h-12 w-12 cursor-pointer items-center rounded-full transition-all duration-100 ease-linear hover:rounded-xl "
        >
          <input
            type="radio"
            name="servers"
            className="peer hidden"
            defaultChecked
          />
          <DiscordLogo className="rounded-full text-bgTertiary group-hover:rounded-xl peer-checked:rounded-xl peer-checked:text-[#5865F2]" />
          <span className="absolute left-[70px] z-10 w-max scale-0 rounded-md bg-bgPrimary py-1 px-4 text-sm font-bold text-white transition-all duration-100 ease-linear group-hover:scale-100">
            Direct Message
          </span>
        </label>
        <div className="mb-[10px] h-[2px] w-8 bg-txtTertiary " />
        <ChannelLogo icon={topLogo} text={"The Odin Project"} />
        <ChannelLogo icon={fireshipLogo} text={"Fireship"} />
        <SidebarIcon icon={<PlusLogo />} text={"Add a Server"} />
        <SidebarIcon icon={<CompassLogo />} text={"Explore Public Servers"} />
        <SidebarIcon icon={<DownloadLogo />} text={"Download Apps"} />
      </nav>
      <Outlet />
    </div>
  )
}
//help functions (makes components)
function SidebarIcon({ icon, text }: any) {
  return (
    <label className="icon-has group relative flex cursor-pointer items-center rounded-full bg-txtTertiary p-3 text-[#3ba55d] transition-all duration-100 ease-linear hover:rounded-xl hover:bg-[#3ba55d] hover:text-white">
      <input type="radio" name="servers" className="hidden" />
      {icon}
      <span className="absolute left-[70px] z-10 w-max scale-0 rounded-md bg-bgPrimary py-1 px-4 text-sm font-bold text-white transition-all duration-100 ease-linear group-hover:scale-100">
        {text}
      </span>
    </label>
  )
}

function ChannelLogo({ icon, text }: any) {
  const navigate = useNavigate()
  return (
    <label
      onClick={() => navigate(`/channels/${text.split(" ").join("")}`)}
      className="group relative flex h-12 w-12 cursor-pointer items-center rounded-full transition-all duration-100 ease-linear hover:rounded-xl "
    >
      <input type="radio" name="servers" className="peer hidden" />
      <img
        className="rounded-full group-hover:rounded-xl peer-checked:rounded-xl"
        src={icon}
        alt="TOP"
      />
      <span className="absolute left-[70px] z-10 w-max scale-0 rounded-md bg-bgPrimary py-1 px-4 text-sm font-bold text-white transition-all duration-100 ease-linear group-hover:scale-100">
        {text}
      </span>
    </label>
  )
}
