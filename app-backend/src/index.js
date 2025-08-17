import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8080

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node backend 👋 Blah !' })
})

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`)
})
