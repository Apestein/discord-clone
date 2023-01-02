import App from "../App"
import { it, expect } from "vitest"
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "./utils/test-utils"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"

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

    userEvent.type(screen.getByRole("textbox"), "Hello,{enter}World!")
    expect(screen.getByRole("textbox")).toHaveValue("Hello,\nWorld!")
  })
})
