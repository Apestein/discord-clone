import { afterAll, afterEach, beforeAll } from "vitest"
import { setupServer } from "msw/node"
import { graphql, rest } from "msw"

export const posts = [
  {
    name: "name",
    uid: "msg",
    message: "message",
    msgID: "msguid",
    photo: "photoURL",
    ref: "docRef",
    timestamp: "Jan 2, 2023",
  },
]

export const restHandlers = [
  rest.get("https://rest-endpoint.example/path/to/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts))
  }),
  rest.post("https://rest-endpoint.example/path/to/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts))
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
