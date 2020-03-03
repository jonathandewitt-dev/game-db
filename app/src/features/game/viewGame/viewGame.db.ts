import { IDBFunction } from '../../../db/mongo'
import { IViewGameDB } from './viewGame'

const viewGame: IDBFunction<IViewGameDB> = async (models, gameId) =>
  (await models.Game.findById(gameId)).toObject()

export default viewGame
