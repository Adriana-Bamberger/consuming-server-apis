import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

const API_KEY = process.env.CATS_API_KEY

// GET /api/v1/welcome/
router.get('/', async (req, res) => {
  try {
    const apiResult = await request
      .get('https://api.thecatapi.com/v1/images/search')
      .query({ limit: 20, api_key: API_KEY })

    res.json(apiResult.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
