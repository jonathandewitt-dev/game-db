import addGame from '../../features/addGame/addGame.ui.cli'
import removeGame from '../../features/removeGame/removeGame.ui.cli'
import viewGame from '../../features/viewGame/viewGame.ui.cli'
import viewGamesForCollector from '../../features/viewGamesForCollector/viewGamesForCollector.ui.cli'
import linkGameToCollector from '../../features/linkGameToCollector/linkGameToCollector.ui.cli'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => Promise.resolve({
  addGame,
  removeGame,
  viewGame,
  viewGamesForCollector,
  linkGameToCollector,
})
