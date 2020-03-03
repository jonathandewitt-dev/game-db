import { IDBFunction } from '../../../db/mongo'
import { IAddGameDB } from './addGame'

const addGame: IDBFunction<IAddGameDB> = async (models, game) =>
  (await models.Game.create(game)).toObject()

export default addGame
