import express from "express"
import router from "./routes/index.js"

const app = express()
app.use(express.json())
app.use(router)

const port = process.env.APP_PORT | 8080

app.listen(port, () => {
    console.log(`App listening on port ${port}, go to http://localhost:${port}`)
})