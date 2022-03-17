import express from "express"
import router from "./routes/index.js"

const app = express()
app.use(express.json())
app.use(router)

app.listen(8080, () => {
    console.log('App listening on port 3000, go to http://localhost:3000')
})