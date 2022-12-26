import { ReactComponent as QR } from "../assets/qr-code.svg"
import { initializeApp } from "firebase/app"
import { useNavigate } from "react-router-dom"
import {
  getAuth,
  updateProfile,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC8fhWnyenGaaCXi4L6CT_qvRuDxMYOfok",
  authDomain: "discord-clone-40fc6.firebaseapp.com",
  projectId: "discord-clone-40fc6",
  storageBucket: "discord-clone-40fc6.appspot.com",
  messagingSenderId: "634540546992",
  appId: "1:634540546992:web:cf53981dbf89899a6cd475",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
signInAnonymously(auth)
  .then(() => {
    // Signed in..
    console.log("sign-in successful")
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ...
    console.log(errorCode)
    console.log(errorMessage)
  })
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    // ...
    console.log(uid)
  } else {
    // User is signed out
    // ...
    console.log("user is signed out")
  }
})

export default function App() {
  const navigate = useNavigate()

  function login(event: any) {
    event.preventDefault()
    const userName = event.target[0].value
    if (auth.currentUser)
      updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then(() => {
          // Profile updated!
          // ...
          console.log("Profile updated")
        })
        .catch((error) => {
          // An error occurred
          // ...
          console.log("An error occurred")
        })
    else console.log("no current user")
    navigate("channels")
  }
  return (
    <div className="relative min-h-[inherit] bg-discord bg-cover bg-[center_top_95px]">
      <div className="absolute top-1/2 left-1/2 flex w-[784px] translate-x-[-50%] translate-y-[-50%] gap-[32px] rounded-[3px] bg-[#36393f] p-[32px] text-white">
        <div className="flex flex-col gap-[10px]">
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
                  className="h-[40px] min-w-[414px] rounded-[3px] border-none bg-[#202225] p-[10px] text-[14px] text-[#b9bbbe] focus:outline-none"
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
                  className="h-[40px] min-w-[414px] rounded-[3px] border-none bg-[#202225] p-[10px] text-[14px] text-[#b9bbbe] outline outline-1 outline-red-500 "
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
        <div className="flex flex-col items-center justify-center gap-[10px] text-center ">
          <QR className="h-fit max-w-[176px] " />
          <h3>Log in with QR code</h3>
          <p className="text-[14px] text-[#b9bbbe]">
            Scan this with the <strong>Discord mobile app</strong> to log in
            instantly.
          </p>
        </div>
      </div>
    </div>
  )
}
