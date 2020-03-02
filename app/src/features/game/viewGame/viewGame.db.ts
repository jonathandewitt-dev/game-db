import { IDBFunction } from '../../../db/mongo'
import { IViewGameDB } from './viewGame'

const viewGame: IDBFunction<IViewGameDB> = async (models, gameId) =>
  models.Game.findById(gameId)

export default viewGame
