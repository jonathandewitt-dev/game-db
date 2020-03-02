// Game Features
import viewGames from '../../features/game/viewGames/viewGames.ui'
import viewGame from '../../features/game/viewGame/viewGame.ui'
import addGame from '../../features/game/addGame/addGame.ui'
import removeGame from '../../features/game/removeGame/removeGame.ui'
import viewGamesForCollector from '../../features/game/viewGamesForCollector/viewGamesForCollector.ui'
import linkGameToCollector from '../../features/game/linkGameToCollector/linkGameToCollector.ui'

// Collector Features
import addCollector from '../../features/collector/addCollector/addCollector.ui'
import removeCollector from '../../features/collector/removeCollector/removeCollector.ui'
import viewCollectors from '../../features/collector/viewCollectors/viewCollectors.ui'

// Types
export type IUIReturnType = string
export interface IUIFunction<T extends (...args: any) => any> {
  (...funcArgs: Parameters<T>): string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => Promise.resolve({
  // Game
  viewGames,
  viewGame,
  addGame,
  removeGame,
  viewGamesForCollector,
  linkGameToCollector,

  // Collector
  addCollector,
  removeCollector,
  viewCollectors,
})
