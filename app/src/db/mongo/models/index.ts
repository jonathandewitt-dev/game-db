import { Connection } from 'mongoose'
import createGame from './Game'
import createCollector from './Collector'

export { GameModel } from './Game'
export { CollectorModel } from './Collector'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (connection: Connection) => ({
  Game: createGame(connection),
  Collector: createCollector(connection),
})
