import express from 'express'
import Routes from './routes'
import cors from 'cors'
const port = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())

app.use(Routes)


app.listen(port)
