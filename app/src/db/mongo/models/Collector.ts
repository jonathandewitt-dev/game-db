import { Connection, Schema, Model, Document } from 'mongoose'
import Collector from '../../../interfaces/Collector'

export type CollectorModel = Model<Collector & Document, {}>

export default (connection: Connection): CollectorModel =>
  connection.model<Collector & Document>('Collector', new Schema({
    displayName: { type: String, required: true },
    games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
  }))