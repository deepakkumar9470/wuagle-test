import express from 'express'
import { addTable, getTable } from '../controllers/hotel.js'

const router = express.Router()


router.post('/add',addTable)

router.get('/get',getTable)

export default router