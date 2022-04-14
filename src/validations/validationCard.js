import Joi from 'joi'



const createNew = async (req, res, next) => {
    const condition = Joi.object({
        boardId: Joi.string().required().trim(),
        columnId: Joi.string().required(),
        title: Joi.string().required().min(3).max(40).trim()
    })
    try {
        await condition.validateAsync(req.body,{abortEarly: false});
        next();
    } catch (error) {
        res.status(400).json({
            errors: new Error(error).message
        })
        
    }
}

export const CardValidation = {createNew}