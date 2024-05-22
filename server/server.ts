
import express from 'express'
import cats from './routes/cats.ts'

const server = express()

server.use(express.json())
server.use('/api/v1/cats', cats)

export default server
