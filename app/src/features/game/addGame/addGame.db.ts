import { IDBFunction } from '../../../db/mongo'
import { IAddGameDB } from './addGame'

const addGame: IDBFunction<IAddGameDB> = async (models, game) =>
  models.Game.create(game)

export default addGame
