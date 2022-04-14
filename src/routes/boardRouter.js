import express from 'express';
import {boardController} from '../controller/boardController.js'
import {BoardValidation} from '../validations/validationBoard.js'

const router = express.Router()

router.route('/')
// .get((req, res) => {console.log('Get Boards')})
.post(BoardValidation.createNew, boardController.createNew)


router.route('/:id')
// .get((req, res) => {console.log('Get Boards')})
.get(boardController.getfullboards)





 export const BoardRouter = router
