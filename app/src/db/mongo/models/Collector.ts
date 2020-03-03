import { Connection, Schema, Model, Document } from 'mongoose'
import Collector from '../../../interfaces/Collector'

export type CollectorModel = Model<Collector & Document, {}>

export default (connection: Connection): CollectorModel =>
  connection.model<Collector & Document>('Collector', new Schema({
    displayName: { type: String, required: true },
    games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
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
