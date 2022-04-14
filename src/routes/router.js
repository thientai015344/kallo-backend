import express from 'express';
import {BoardRouter} from './boardRouter.js'
import {ColumnRouter} from './columnRouter.js'
import {CardRouter} from './cardRouter.js'





const router = express.Router()




router.get('/status', (req, res) => {res.status(200).json({status: 'ok'})})

////////////////////////////////////////////////////////////////

router.use('/boards', BoardRouter)



router.use('/columns', ColumnRouter)


router.use('/cards', CardRouter)

export const api1 = router

