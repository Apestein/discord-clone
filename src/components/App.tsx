import { ReactComponent as QR } from "../assets/qr-code.svg"
import { initializeApp } from "firebase/app"
import { useNavigate } from "react-router-dom"
import { getAuth, updateProfile, signInAnonymously } from "firebase/auth"
import Loader from "./Loader"

const firebaseConfig = {
  apiKey: "AIzaSyC8fhWnyenGaaCXi4L6CT_qvRuDxMYOfok",
  authDomain: "discord-clone-40fc6.firebaseapp.com",
  projectId: "discord-clone-40fc6",
  storageBucket: "discord-clone-40fc6.appspot.com",
  messagingSenderId: "634540546992",
  appId: "1:634540546992:web:cf53981dbf89899a6cd475",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function App() {
  const navigate = useNavigate()

  async function login(event: any) {
    event.preventDefault()
    const loader = document.querySelector("#loader-wrapper")
    if (loader) loader.classList.remove("invisible")
    await signInAnonymously(auth)
      .then(() => {
        console.log("sign-in successful")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ...
        console.log(errorCode)
        console.log(errorMessage)
      })
    const userName = event.target[0]?.value
    if (auth.currentUser?.displayName) {
      await updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          console.log("existing user login")
        })
        .catch((error) => {
          console.error("An error occurred", error)
        })
      setTimeout(navigate, 1500, "channels")
    } else if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: `https://avatars.dicebear.com/api/adventurer/${auth.currentUser.uid}.svg`,
      })
        .then(() => {
          console.log("New user login, Profile updated")
        })
        .catch((error) => {
          console.error("An error occurred", error)
        })
      setTimeout(navigate, 1500, "channels")
    }
  }

  return (
    <div className="flex min-h-screen min-w-fit items-center justify-center bg-discord bg-cover bg-[center_top_95px]">
      <div className="flex h-screen w-full max-w-[784px] justify-center gap-5 bg-bgTertiary p-8 text-white sm:h-[408px] sm:w-fit sm:rounded-md md:min-w-[414px]">
        <div className="flex w-full flex-col gap-[10px]">
          <h3 className="text-center text-[24px]">Welcome back!</h3>
          <p className="text-center">We're so excited to see you again!</p>
          <form onSubmit={login} id="sign-in-form">
            <div className="flex flex-col gap-[20px]">
              <label className="g-[5px] flex flex-col items-start text-[12px] text-[#b9bbbe]">
                <p>
                  EMAIL OR PHONE NUMBER{" "}
                  <span className="text-[#ed4245]">*</span>
                </p>
                <input
                  required
                  title="Please fill out this field."
                  className="h-[40px] w-full rounded-[3px] border-none bg-[#202225] p-[10px] text-[14px] text-[#b9bbbe] focus:outline-none"
                />
              </label>
              <label className="g-[5px] flex flex-col items-start text-[12px] text-[#b9bbbe]">
                <p>
                  PASSWORD <span className="text-[#ed4245]">*</span>
                </p>
                <input
                  disabled={true}
                  type="password"
                  title="Please fill out this field."
                  placeholder="Pick a username, no password needed"
                  className="h-[40px] min-w-full rounded-[3px] border-none bg-[#202225] p-[10px] text-[14px] text-[#b9bbbe] outline outline-1 outline-red-500 "
                />
              </label>
            </div>
            <a className="text-[13px] text-[#00aff4] ">Forgot your password?</a>
            <br />
            <button
              form="sign-in-form"
              className="my-[10px] h-[44px] w-full rounded-[3px] border-none bg-[#5865f2] text-white "
            >
              Log In
            </button>
            <p className="text-[14px] text-[#b9bbbe] ">
              Need an account?{" "}
              <a className="text-[13px] text-[#00aff4] ">Register</a>
            </p>
          </form>
        </div>
        <div className="hidden flex-col items-center justify-center gap-[10px] text-center lg:flex ">
          <QR className="h-fit max-w-[176px] " />
          <h3>Log in with QR code</h3>
          <p className="text-[14px] text-[#b9bbbe]">
            Scan this with the <strong>Discord mobile app</strong> to log in
            instantly.
          </p>
        </div>
      </div>
      <div
        data-testid="loader"
        id="loader-wrapper"
        className="invisible fixed flex h-screen w-screen items-center justify-center bg-black bg-opacity-90"
      >
        <Loader />
      </div>
    </div>
  )
}
