import { Connection, Schema, Model, Document } from 'mongoose'
import Game from '../../../interfaces/Game'

export type GameModel = Model<Game & Document, {}>

export default (connection: Connection): GameModel =>
  connection.model('Game', new Schema({
    title: { type: String, required: true },
  }))
