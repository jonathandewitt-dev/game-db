import { IDBFunction } from '../../../db/mongo'
import { IRemoveGameDB } from './removeGame'

const removeGame: IDBFunction<IRemoveGameDB> = async (models, gameId) =>
  (await models.Game.findByIdAndDelete(gameId)).toObject()

export default removeGame
