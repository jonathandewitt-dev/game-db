import DBData from '../../interfaces/DBData'

// Game Features
import viewGames from '../../features/game/viewGames/viewGames.db.volatile'
import viewGame from '../../features/game/viewGame/viewGame.db.volatile'
import addGame from '../../features/game/addGame/addGame.db.volatile'
import removeGame from '../../features/game/removeGame/removeGame.db.volatile'
import viewGamesForCollector from '../../features/game/viewGamesForCollector/viewGamesForCollector.db.volatile'
import linkGameToCollector from '../../features/game/linkGameToCollector/linkGameToCollector.db.volatile'

// Collector Features
import addCollector from '../../features/collector/addCollector/addCollector.db.volatile'
import removeCollector from '../../features/collector/removeCollector/removeCollector.db.volatile'
import viewCollectors from '../../features/collector/viewCollectors/viewCollectors.db.volatile'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (seedData: DBData = {}) => {
  const dbData = Object.assign({
    collectors: [],
    games: [],
  }, seedData)

  // NOTE: Cannot DRY this up because the TypeScript compiler loses track of types
  return Promise.resolve({
    // Game
    viewGames: viewGames.bind(this, dbData),
    viewGame: viewGame.bind(this, dbData),
    addGame: addGame.bind(this, dbData),
    removeGame: removeGame.bind(this, dbData),
    viewGamesForCollector: viewGamesForCollector.bind(this, dbData),
    linkGameToCollector: linkGameToCollector.bind(this, dbData),

    // Collector
    addCollector: addCollector.bind(this, dbData),
    removeCollector: removeCollector.bind(this, dbData),
    viewCollectors: viewCollectors.bind(this, dbData),
  })
}
