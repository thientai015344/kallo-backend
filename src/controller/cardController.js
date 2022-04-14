import {CardService} from '../services/cardSevice.js'


const createNew = async (req, res) => {
    console.log('createNew contr', req.body)
  try {
      const result = CardService.createNew(req.body)
      res.status(200).json(result)
  } catch (error) {
      res.status(500).json({ errors: error})
  }
}


export const cardController = {createNew}