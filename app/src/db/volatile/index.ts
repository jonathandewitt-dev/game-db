import DBData from '../types/DBData'
import addGame from './addGame'
import getGame from './getGame'
import getGamesForCollector from './getGamesForCollector'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (seedData: DBData = {}) => {
  const dbData = Object.assign({
    collectors: [],
    games: [],
  }, seedData)

  // NOTE: Cannot DRY this up because the TypeScript compiler loses track of types
  return Promise.resolve({
    getGamesForCollector: getGamesForCollector.bind(this, dbData),
    addGame: addGame.bind(this, dbData),
    getGame: getGame.bind(this, dbData),
  })
}
