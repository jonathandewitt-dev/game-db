import addGame from './addGame'
import viewGame from './viewGame'
import viewGamesForCollector from './viewGamesForCollector'
import linkGameToCollector from './linkGameToCollector'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => Promise.resolve({
  addGame,
  viewGame,
  viewGamesForCollector,
  linkGameToCollector,
})
