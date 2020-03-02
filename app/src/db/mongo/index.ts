import { createConnection, Model, Document, DocumentQuery } from 'mongoose'
import DBData from '../../interfaces/DBData'
import Pagination from '../../interfaces/Pagination'

// Model factory functions and the types
import createGameModel, { GameModel } from './models/Game'
import createCollectorModel, { CollectorModel } from './models/Collector'

// Game Features
import viewGames from '../../features/game/viewGames/viewGames.db'
import viewGame from '../../features/game/viewGame/viewGame.db'
import addGame from '../../features/game/addGame/addGame.db'
import removeGame from '../../features/game/removeGame/removeGame.db'
import viewGamesForCollector from '../../features/game/viewGamesForCollector/viewGamesForCollector.db'
import linkGameToCollector from '../../features/game/linkGameToCollector/linkGameToCollector.db'

// Collector Features
import viewCollectors from '../../features/collector/viewCollectors/viewCollectors.db'
import addCollector from '../../features/collector/addCollector/addCollector.db'
import removeCollector from '../../features/collector/removeCollector/removeCollector.db'

// Types
interface IDBModels {
  Game: GameModel
  Collector: CollectorModel
}

export interface IDBFunction<T extends (...args: any) => any> {
  (
    models: IDBModels,
    ...funcArgs: Parameters<T>
  ): ReturnType<T>
}

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

  const models: IDBModels = {
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
