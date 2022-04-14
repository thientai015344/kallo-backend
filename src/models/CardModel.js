import Joi from "joi"
import { ObjectId } from "mongodb"
import {getDB} from "../config/configdb.js"



const cardcollecttionName = 'cards'
const cardcollecttionSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().required().min(3).max(40).trim(),
    cover: Joi.string().default(null),
    createAt: Joi.date().timestamp().default(Date.now()),
    updateAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) =>{
    return await cardcollecttionSchema.validateAsync(data, {abortEarly: false})
}

const createNew = async (data) =>{
    try {
        const validatevalue = await validateSchema(data)
        const insertValue = {
            ...validatevalue,
            boardId: ObjectId(validatevalue.boardId),
            columnId: ObjectId(validatevalue.columnId)

        }
        const result = await getDB().collection(cardcollecttionName).insertOne(insertValue)
         return result.insertedId
     
    } catch (error) {
        console.log(error)
    }
}

export const CardModell = {createNew}