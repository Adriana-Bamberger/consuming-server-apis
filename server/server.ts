
import express from 'express'
import cats from './routes/cats.ts'

// const __filename = URL.fileURLToPath(import.meta.url)
// const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use('/api/v1/cats', cats)

export default server
