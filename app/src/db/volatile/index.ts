import DBData from '../../interfaces/DBData'
import addGame from '../../features/addGame/addGame.db.volatile'
import removeGame from '../../features/removeGame/removeGame.db.volatile'
import viewGame from '../../features/viewGame/viewGame.db.volatile'
import getGamesForCollector from '../../features/viewGamesForCollector/viewGamesForCollector.db.volatile'
import linkGameToCollector from '../../features/linkGameToCollector/linkGameToCollector.db.volatile'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (seedData: DBData = {}) => {
  const dbData = Object.assign({
    collectors: [],
    games: [],
  }, seedData)

  // NOTE: Cannot DRY this up because the TypeScript compiler loses track of types
  return Promise.resolve({
    getGamesForCollector: getGamesForCollector.bind(this, dbData),
    linkGameToCollector: linkGameToCollector.bind(this, dbData),
    addGame: addGame.bind(this, dbData),
    removeGame: removeGame.bind(this, dbData),
    viewGame: viewGame.bind(this, dbData),
  })
}
