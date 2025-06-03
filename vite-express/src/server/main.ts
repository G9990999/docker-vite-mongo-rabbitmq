import express from "express"
import ViteExpress from "vite-express"

const app = express()

app.get("/hello", (_, res) => {
  res.send("Hello Vite + Vue + TypeScript!");
})

const server = app.listen(3030, '0.0.0.0', () =>
  console.log("Server is listening on port 3030..."),
)

ViteExpress.bind(app, server)
