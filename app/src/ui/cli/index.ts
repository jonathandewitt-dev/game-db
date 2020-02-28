// Game Features
import viewGames from '../../features/game/viewGames/viewGames.ui.cli'
import viewGame from '../../features/game/viewGame/viewGame.ui.cli'
import addGame from '../../features/game/addGame/addGame.ui.cli'
import removeGame from '../../features/game/removeGame/removeGame.ui.cli'
import viewGamesForCollector from '../../features/game/viewGamesForCollector/viewGamesForCollector.ui.cli'
import linkGameToCollector from '../../features/game/linkGameToCollector/linkGameToCollector.ui.cli'

// Collector Features
import addCollector from '../../features/collector/addCollector/addCollector.ui.cli'
import removeCollector from '../../features/collector/removeCollector/removeCollector.ui.cli'
import viewCollectors from '../../features/collector/viewCollectors/viewCollectors.ui.cli'

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
