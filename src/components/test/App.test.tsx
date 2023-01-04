//import { it, expect } from "vitest"
import App from "../App"
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "./utils/test-utils"
import "@testing-library/jest-dom"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Servers from "../Servers"
import ChannelTOP from "../ChannelTOP"
import { toMatchImageSnapshot } from "jest-image-snapshot"

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R
    }
  }
}
expect.extend({ toMatchImageSnapshot })

describe("app component", () => {
  it("h3 loads", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByRole("heading", { name: "Welcome back!" })
    ).toHaveTextContent("Welcome back!")
  })
  it("loads correctly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await userEvent.type(screen.getByRole("textbox"), "Hello, World!")
    expect(await screen.findByRole("textbox")).toHaveValue("Hello, World!")

    expect(await screen.findByTestId("loader")).toHaveClass("invisible")
    await userEvent.click(screen.getByRole("button"))
    expect(await screen.findByTestId("loader")).not.toHaveClass("invisible")
  })
})

describe("server component", () => {
  it("loads the server component", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/TheOdinProject"]}>
        <Routes>
          <Route path="/" element={<Servers />}>
            <Route path="TheOdinProject" element={<ChannelTOP />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
    await userEvent.type(screen.getByRole("textbox"), "hello world!")
    expect(await screen.findByRole("textbox")).toHaveValue("hello world!")
    const formElement = container.querySelector("form")
    formElement?.submit()
    expect(await screen.findByRole("textbox")).toHaveValue("")
  })
})
