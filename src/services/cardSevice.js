import {CardModell} from '../models/CardModel.js';


const createNew = async(data) => {
    try {
        const result = await CardModell.createNew(data);
        return result
    } catch (error) {
        throw new Error(error)
        
    }
}

export const CardService = {createNew}
