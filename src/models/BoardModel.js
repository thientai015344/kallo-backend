import { ObjectID } from "bson"
import Joi from "joi"
import { ObjectId } from "mongodb"
import {getDB} from "../config/configdb.js"



const boardcollecttionName = 'boards'
const boardcollecttionSchema = Joi.object({

    title: Joi.string().required().min(3).max(20),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createAt: Joi.date().timestamp().default(Date.now()),
    updateAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) =>{
    return await boardcollecttionSchema.validateAsync(data, {abortEarly: false})
}

const createNew = async (data) =>{
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(boardcollecttionName).insertOne(value)
         return result.ops[0]
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * @param {string} columnId  
 * @param {string} boardId  
 * 
 */

const pushColumnOrder = async (boardId, columnId) =>{
    console.log('cc',columnId,);
    try {
        
        const result = await getDB().collection(boardcollecttionName).findOneAndUpdate(
            { _id: ObjectID(boardId) },
            {$push: { columnOrder: columnId} },
            {$returnOriginal: false}
            
            
            )
          
        return result.value
    } catch (error) {
        throw new Error(error)   
    }
}    

const getfullboards = async (boardId) =>{
    console.log('fullboardId', boardId)
    try {
      
        const result = await getDB().collection(boardcollecttionName).aggregate([
            {
                 $match: {
                 _id: ObjectId(boardId)
                }
            },
         
            {
                $lookup: {
                    from:'columns',
                    localField: ' _id',
                    foreignField: 'boardId.str',
                    as: 'columns'
                }
            },
            {
                $lookup: {
                    from:'cards',
                    localField: ' _id',
                    foreignField: 'boardId.str',
                    as: 'cards'
                }
            },
          
        ]).toArray();
         return result
        
     
    } catch (error) {
        throw new Error(error)
    }
}

export const BoardModell = {createNew ,pushColumnOrder , getfullboards  }  