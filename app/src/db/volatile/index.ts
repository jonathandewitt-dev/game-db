import DB from '../../types/DB'
import DBData from '../../types/DBData'
import addGame from './addGame'
import getGame from './getGame'
import getGamesForCollector from './getGamesForCollector'

const functionEntries = Object.entries({
  getGamesForCollector,
  addGame,
  getGame
})

export default async (seedData: DBData = {}): Promise<DB> => {
  const dbData = Object.assign({
    collectors: [],
    games: [],
  }, seedData)

  const closureEntries = functionEntries.map(([key, fn]) =>
    // @ts-ignore
    [key, async (...args: any[]) => fn(dbData, ...args)]
  )

  // @ts-ignore
  const db = Object.fromEntries<DB>(closureEntries)

  return Promise.resolve(db)
}
