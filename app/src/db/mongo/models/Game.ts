import { Connection, Schema, Model, Document } from 'mongoose'
import Game from '../../../interfaces/Game'

export type GameModel = Model<Game & Document, {}>

export default (connection: Connection): GameModel =>
  connection.model('Game', new Schema({
    title: { type: String, required: true },
    createdDate: { type: Date, required: true, default: Date.now },
  }, {
    toObject: {
      transform(doc, ret, options) {
        ret.id = ret._id
        delete ret._id
        return ret
      }
    }
  }))
