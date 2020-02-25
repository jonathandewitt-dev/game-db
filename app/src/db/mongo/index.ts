import { createConnection } from 'mongoose'
import DBData from '../../interfaces/DBData'

// Model factory functions
import createGame from './models/Game'
import createCollector from './models/Collector'

// Features
import addGame from '../../features/addGame/addGame.db.mongo'
import removeGame from '../../features/removeGame/removeGame.db.mongo'
/*
import viewGame from '../../features/viewGame/viewGame.db.mongo'
import getGamesForCollector from '../../features/viewGamesForCollector/viewGamesForCollector.db.mongo'
import linkGameToCollector from '../../features/linkGameToCollector/linkGameToCollector.db.mongo'
*/

// Types
export { GameModel } from './models/Game'
export { CollectorModel } from './models/Collector'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (seedData: DBData = {}) => {
  const connection = await createConnection('mongodb://db:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  // eslint-disable-next-line
  const models = {
    Game: createGame(connection),
    Collector: createCollector(connection),
  }

  // NOTE: Cannot DRY this up because the TypeScript compiler loses track of types
  return Promise.resolve({
    addGame: addGame.bind(this, models),
    removeGame: removeGame.bind(this, models),
    /*
    getGamesForCollector: getGamesForCollector.bind(this, models),
    linkGameToCollector: linkGameToCollector.bind(this, models),
    viewGame: viewGame.bind(this, models),
    */
    close: async () => connection.close(),
  })
}
