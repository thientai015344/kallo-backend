import express from 'express';
import {cardController} from '../controller/cardController.js'
import {CardValidation} from '../validations/validationCard.js'

const router = express.Router()

router.route('/')
// .get((req, res) => {console.log('Get Boards')})
.post(CardValidation.createNew, cardController.createNew)





 export const CardRouter = router
