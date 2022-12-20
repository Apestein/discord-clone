import React from "react"
import { ReactComponent as QR } from "../assets/qr-code.svg"

export default function App() {
  return (
    <div className="relative min-h-[inherit] bg-discord bg-cover">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-[32px] p-[32px] w-[784px] bg-[#36393f] text-white rounded-[3px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[24px] text-center">Welcome back!</h3>
          <p className="text-center">We're so excited to see you again!</p>
          <form>
            <div className="flex flex-col gap-[20px]">
              <label className="flex flex-col items-start g-[5px] text-[12px] text-[#b9bbbe]">
                <p>
                  EMAIL OR PHONE NUMBER{" "}
                  <span className="text-[#ed4245]">*</span>
                </p>
                <input
                  title="Please fill out this field."
                  className="min-w-[414px] p-[10px] h-[40px] rounded-[3px] border-none bg-[#202225] text-[#b9bbbe] text-[14px]"
                />
              </label>
              <label className="flex flex-col items-start g-[5px] text-[12px] text-[#b9bbbe]">
                <p>
                  PASSWORD <span className="text-[#ed4245]">*</span>
                </p>
                <input
                  type="password"
                  title="Please fill out this field."
                  className="min-w-[414px] p-[10px] h-[40px] rounded-[3px] border-none bg-[#202225] text-[#b9bbbe] text-[14px]"
                />
              </label>
            </div>
            <a className="text-[#00aff4] text-[13px] ">Forgot your password?</a>
            <br />
            <button className="w-full h-[44px] my-[10px] bg-[#5865f2] text-white border-none rounded-[3px] ">
              Log In
            </button>
            <p className="text-[#b9bbbe] text-[14px] ">
              Need an account?{" "}
              <a className="text-[#00aff4] text-[13px] ">Register</a>
            </p>
          </form>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-[10px] ">
          <QR className="max-w-[176px] h-fit " />
          <h3>Log in with QR code</h3>
          <p className="text-[#b9bbbe] text-[14px]">
            Scan this with the <strong>Discord mobile app</strong> to log in
            instantly.
          </p>
        </div>
      </div>
    </div>
  )
}
