import express, { Request, Response, NextFunction } from 'express'
import { createVandor, getVandorById, getVandors } from '../controllers'

const router = express.Router()

router.post('/vandor', createVandor)
router.get('/vandors', getVandors)
router.get('/vandor/:id', getVandorById)

export {
  router as AdminRouter
}