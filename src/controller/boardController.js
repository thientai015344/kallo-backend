import {BoardService} from '../services/boadSevice.js'


const createNew = async (req, res) => {
  try {
      const result = BoardService.createNew(req.body)
      res.status(200).json(result)
  } catch (error) {
      res.status(500).json({ errors: error})
  }
}


const getfullboards = async (req, res) => {
   
  try {
      const {id} = req.params
      console.log('id', id)
     const result = await BoardService.getfullboards(id)
     console.log('result', result)
      res.status(200).json(result)
  } catch (error) {
      res.status(500).json({ errors: error})
  }
}


export const boardController = {createNew, getfullboards}