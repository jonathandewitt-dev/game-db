import { IDBFunction } from '../../../db/mongo'
import { IRemoveGameDB } from './removeGame'

const removeGame: IDBFunction<IRemoveGameDB> = async (models, gameId) =>
  models.Game.findByIdAndDelete(gameId)

export default removeGame
