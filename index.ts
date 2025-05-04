import express from 'express'
import { AdminRouter, VandorRouter } from './routes'

const app = express()

app.use('/admin', AdminRouter)
app.use('/vandor', VandorRouter)

app.listen(8000, () => {
  console.log('>>> TRADER MARKETPLACE IS LISTENING TO THE PORT 8000')
})