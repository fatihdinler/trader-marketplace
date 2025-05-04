import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { AdminRouter, VandorRouter } from './routes'
import { MONGODB_URI } from './config'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(MONGODB_URI)
  .then(dbResponse => console.log('>>> Database established successfully'))
  .catch(dbError => console.log('!!! ERROR WHILE CONNECTING TO THE DATABASE: ', dbError))

app.use('/admin', AdminRouter)
app.use('/vandor', VandorRouter)

app.listen(8000, () => {
  // console.clear()
  console.log('>>> TRADER MARKETPLACE IS LISTENING TO THE PORT 8000')
}) 