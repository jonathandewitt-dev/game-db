import { Model, Document } from 'mongoose'
import Identifier from '../../../interfaces/Identifier'
import Game from '../../../interfaces/Game'

export default async (models: { Game: Model<Game & Document, {}> }, gameId: Identifier): Promise<Game> =>
  models.Game.findByIdAndDelete(gameId)
