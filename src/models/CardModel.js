import Joi from "joi"
import {getDB} from "../config/configdb.js"



const cardcollecttionName = 'trello'
const cardcollecttionSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
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
        const value = await validateSchema(data)
        const result = await getDB().collection('cards').insertOne(value)
         return result.insertedId
     
    } catch (error) {
        console.log(error)
    }
}

export const CardModell = {createNew}