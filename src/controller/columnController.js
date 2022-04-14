import {ColumnService} from '../services/columnSevice.js'


const createNew = async (req, res) => {
    console.log('createNew contr', req.body)
  try {
      const result = ColumnService.createNew(req.body)
      res.status(200).json(result)
  } catch (error) {
      res.status(500).json({ errors: error})
  }
}

const update = async (req, res) => {
    
  try {
      const {id} = req.params
      const result = await ColumnService.update(id, req.body)
      res.status(200).json(result)
  } catch (error) {
      res.status(500).json({ errors: error})
  }
}


export const columnController = {
    createNew,
    update
}