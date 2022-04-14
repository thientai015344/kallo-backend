import Joi from "joi"
import { ObjectId } from "mongodb"
import {getDB} from "../config/configdb.js"



const columncollecttionName = 'columns'
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
        const validatevalue = await validateSchema(data)
        const insertValue = {
            ...validatevalue,
            boardId: ObjectId(validatevalue.boardId)
        }
        const result = await getDB().collection(columncollecttionName).insertOne(insertValue)
         return result
     
    } catch (error) {
        console.log(error)
    }
}

const update = async (data) =>{
    try {
     
        const result = await getDB().collection(columncollecttionName).findOneAndUpdate(
          {_id: ObjectId(id)} ,
          {$set: data},
          {returnOriginal: false}
        )
         return result.value
     
    } catch (error) {
        console.Error(error)
    }
}

export const ColumnModell = {createNew, update}