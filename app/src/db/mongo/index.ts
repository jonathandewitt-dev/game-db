import { createConnection, Model, Document, DocumentQuery } from 'mongoose'
import DBData from '../../interfaces/DBData'
import Pagination from '../../interfaces/Pagination'

// Model factory functions
import createGameModel from './models/Game'
import createCollectorModel from './models/Collector'

// Game Features
import viewGames from '../../features/game/viewGames/viewGames.db.mongo'
import viewGame from '../../features/game/viewGame/viewGame.db.mongo'
import addGame from '../../features/game/addGame/addGame.db.mongo'
import removeGame from '../../features/game/removeGame/removeGame.db.mongo'
import viewGamesForCollector from '../../features/game/viewGamesForCollector/viewGamesForCollector.db.mongo'
import linkGameToCollector from '../../features/game/linkGameToCollector/linkGameToCollector.db.mongo'

// Collector Features
import viewCollectors from '../../features/collector/viewCollectors/viewCollectors.db.mongo'
import addCollector from '../../features/collector/addCollector/addCollector.db.mongo'
import removeCollector from '../../features/collector/removeCollector/removeCollector.db.mongo'

// Types
export { GameModel } from './models/Game'
export { CollectorModel } from './models/Collector'

// DB Shared Utils
export const paginateQuery = <T extends Document>(
  model: Model<T, {}>,
  pagination: Pagination,
  findConfig: any = {}
): DocumentQuery<Array<T & Document>, T & Document, {}> => {

  if (pagination.firstCreatedDate !== undefined || pagination.lastCreatedDate !== undefined) {
    findConfig.createdDate = {}
  }

  if (pagination.firstCreatedDate !== undefined) {
    Object.assign(findConfig.createdDate, {
      $gte: pagination.firstCreatedDate
    })
  }

  if (pagination.lastCreatedDate !== undefined) {
    Object.assign(findConfig.createdDate, {
      $lte: pagination.lastCreatedDate
    })
  }

  return model
    .find(findConfig)
    .limit(pagination.limit)
    .sort('-createdDate')
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (seedData: DBData = {}) => {
  const connection = await createConnection('mongodb://db:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  // eslint-disable-next-line
  const models = {
    Game: createGameModel(connection),
    Collector: createCollectorModel(connection),
  }

  // NOTE: Cannot DRY this up because the TypeScript compiler loses track of types
  return Promise.resolve({
    // Game
    viewGames: viewGames.bind(this, models),
    viewGame: viewGame.bind(this, models),
    addGame: addGame.bind(this, models),
    removeGame: removeGame.bind(this, models),
    viewGamesForCollector: viewGamesForCollector.bind(this, models),
    linkGameToCollector: linkGameToCollector.bind(this, models),

    // Collector
    addCollector: addCollector.bind(this, models),
    removeCollector: removeCollector.bind(this, models),
    viewCollectors: viewCollectors.bind(this, models),

    close: async () => connection.close(),
  })
}
