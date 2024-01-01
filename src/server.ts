require('dotenv/config')
import express from 'express'
import db from './core/db'
const app = express()
const PORT = process.env.PORT || 8080
import userRouter from './routes/user.routes'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/app', userRouter)

app.listen(PORT, () => {
  db()
  console.log('Server run ', PORT)
})
