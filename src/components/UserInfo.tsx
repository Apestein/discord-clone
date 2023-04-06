import { ReactComponent as MicrophoneIcon } from "../assets/microphone.svg"
import { ReactComponent as HeadphoneIcon } from "../assets/headphone.svg"
import { ReactComponent as GearIcon } from "../assets/gear.svg"
import { getAuth, updateProfile, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useEffect, useState } from "react"

export default function UserInfo() {
  const auth = getAuth()
  const userName = auth.currentUser?.displayName
  const [profileImg, setProfileImg] = useState("#")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.photoURL) setProfileImg(user.photoURL)
      } else {
        console.log("no user")
      }
    })
  })

  function clickUploadInput() {
    const file = document.querySelector(
      "[placeholder='file-upload']"
    ) as HTMLInputElement
    file?.click()
  }

  async function uploadFile(e: any) {
    const file = e.target.files[0]
    console.log(file.type)
    if (!file.type.includes("image")) {
      alert("not an image")
      return
    }
    const storage = getStorage()
    const imgRef = ref(storage, auth.currentUser?.uid + file.name)
    await uploadBytes(imgRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file:" + imgRef)
    })

    getDownloadURL(imgRef).then((url) => {
      if (auth.currentUser)
        updateProfile(auth.currentUser, {
          photoURL: url,
        })
          .then(() => {
            setProfileImg(url)
            console.log("Profile photo updated")
          })
          .catch((error) => {
            console.error("An error occurred", error)
          })
    })
  }

  return (
    <div className="absolute bottom-0 flex w-full items-center justify-center gap-2 bg-bgQuaternary p-1 ">
      <div className="relative">
        <img
          onClick={clickUploadInput}
          className="h-10 w-10 cursor-pointer rounded-full bg-black object-cover"
          alt="user-img"
          src={profileImg}
        />
        <input
          className="hidden"
          onChange={uploadFile}
          accept=".jpg, .jpeg, .png, .svg"
          type="file"
          placeholder="file-upload"
        />
        <div className="absolute right-0 bottom-0 h-[13px] w-[13px] rounded-full border-2 border-bgSecondary bg-[#3ba55d] " />
      </div>
      <div className="w-[12ch] overflow-hidden text-ellipsis whitespace-nowrap">
        <strong className="text-sm text-white">{userName}</strong>
        <p className="pb-2 text-xs leading-[6px]">
          #{auth.currentUser?.uid.slice(0, 5)}
        </p>
      </div>
      <MicrophoneIcon />
      <HeadphoneIcon />
      <GearIcon />
    </div>
  )
}
