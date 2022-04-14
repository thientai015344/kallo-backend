import express from 'express';
import {columnController} from '../controller/columnController.js'
import {ColumnValidation} from '../validations/validationColumn.js'

const router = express.Router()

router.route('/')

.post(ColumnValidation.createNew, columnController.createNew)


router.route('/:id')

.put(ColumnValidation.update, columnController.update)


 export const ColumnRouter = router
