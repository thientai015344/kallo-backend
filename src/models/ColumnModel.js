import Joi from "joi"
import {getDB} from "../config/configdb.js"



const columncollecttionName = 'trello'
const columncollecttionSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string()).default([]),
    createAt: Joi.date().timestamp().default(Date.now()),
    updateAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) =>{
    return await columncollecttionSchema.validateAsync(data, {abortEarly: false})
}

const createNew = async (data) =>{
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection('columns').insertOne(value)
         return result.insertedId
     
    } catch (error) {
        console.log(error)
    }
}

export const ColumnModell = {createNew}