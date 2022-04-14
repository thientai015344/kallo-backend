import {BoardModell} from '../models/BoardModel.js';


const createNew = async(data) => {
    try {
        const result = await BoardModell.createNew(data);
        return result
    } catch (error) {
        throw new Error(error)
        
    }
}


const getfullboards = async(boardId) => {
    console.log('boadid', boardId)
    try {
        const result = await BoardModell.getfullboards(boardId);


        return result
     
    } catch (error) {
        throw new Error(error)
        
    }
}


export const BoardService = {createNew, getfullboards}
