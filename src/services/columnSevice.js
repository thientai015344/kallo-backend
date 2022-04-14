import { BoardModell } from '../models/BoardModel.js';
import {ColumnModell} from '../models/ColumnModel.js';


const createNew = async(data) => {
    try {
        const newcolumn = await ColumnModell.createNew(data);

        const boardId =  data.boardId
       const columnId= newcolumn.insertedId.toString();

        




          await BoardModell.pushColumnOrder(boardId, columnId);



        return newcolumn
    } catch (error) {
        throw new Error(error)
        
    }
}

const update = async(id, data) => {
    try {
        const updateData ={
            ...data,
            updatedAt: Date.now(),
        
        };
        const result = await ColumnModell.update(id,data);
        return result
    } catch (error) {
        throw new Error(error)
        
    }
}

export const ColumnService = {createNew, update}
