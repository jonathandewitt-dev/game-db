import createUI from './ui/cli'
import createDB from './db/mongo'
import viewGames from './features/game/viewGames/viewGames'
import viewGame from './features/game/viewGame/viewGame'
import addGame from './features/game/addGame/addGame'
import removeGame from './features/game/removeGame/removeGame'
import viewGamesForCollector from './features/game/viewGamesForCollector/viewGamesForCollector'
import linkGameToCollector from './features/game/linkGameToCollector/linkGameToCollector'
import viewCollectors from './features/collector/viewCollectors/viewCollectors'
import addCollector from './features/collector/addCollector/addCollector'
import removeCollector from './features/collector/removeCollector/removeCollector'

import inquirer from 'inquirer'

export default async ({ env, args }: { env: string, args: string[] }): Promise<void> => {
  const ui = await createUI()
  const db = await createDB()

  const commandHandlers: any = {
    viewGames: async () => {
      const { limit, firstId } = await inquirer.prompt([
        { name: 'limit', message: 'Enter limit:', type: 'number', default: 25 },
        { name: 'firstId', message: 'Enter firstId:' },
      ])
      return viewGames(ui.viewGames, db.viewGames, { limit, firstId })
    },

    viewGame: async () => {
      const { id } = await inquirer.prompt([{
        name: 'id',
        message: 'Enter game id:',
      }])
      return viewGame(ui.viewGame, db.viewGame, id)
    },

    addGame: async () => {
      const { title } = await inquirer.prompt([{
        name: 'title',
        message: 'Enter game title:',
      }])
      return addGame(ui.addGame, db.addGame, { title })
    },

    removeGame: async () => {
      const { id } = await inquirer.prompt([{
        name: 'id',
        message: 'Enter game id:',
      }])
      return removeGame(ui.removeGame, db.removeGame, id)
    },

    viewGamesForCollector: async () => {
      const { collectorId, limit, firstId } = await inquirer.prompt([
        { name: 'collectorId', message: 'Enter collectorId:' },
        { name: 'limit', message: 'Enter limit:', type: 'number', default: 25 },
        { name: 'firstId', message: 'Enter firstId:' },
      ])
      return viewGamesForCollector(ui.viewGamesForCollector, db.viewGamesForCollector, collectorId, {
        limit,
        firstId,
      })
    },

    linkGameToCollector: async () => {
      const { collectorId, gameId } = await inquirer.prompt([
        { name: 'collectorId', message: 'Enter collectorId:' },
        { name: 'gameId', message: 'Enter gameId:' },
      ])
      return linkGameToCollector(ui.linkGameToCollector, db.linkGameToCollector, collectorId, gameId)
    },

    viewCollectors: async () => {
      const { limit, firstId } = await inquirer.prompt([
        { name: 'limit', message: 'Enter limit:', type: 'number', default: 25 },
        { name: 'firstId', message: 'Enter firstId:' },
      ])
      return viewCollectors(ui.viewCollectors, db.viewCollectors, { limit, firstId })
    },

    addCollector: async () => {
      const { displayName } = await inquirer.prompt([{
        name: 'displayName',
        message: 'Enter collector displayName:',
      }])
      return addCollector(ui.addCollector, db.addCollector, { displayName })
    },

    removeCollector: async () => {
      const { id } = await inquirer.prompt([{
        name: 'id',
        message: 'Enter collector id:',
      }])
      return removeCollector(ui.removeCollector, db.removeCollector, id)
    },
  }
  // @ts-ignore
  const commands = Object.keys(commandHandlers).concat([new inquirer.Separator(), 'exit'])

  let exit = false
  while (!exit) {
    try {
      const { option } = await inquirer.prompt([{
        name: 'option',
        message: '\n\nSelect an option:',
        type: 'list',
        choices: commands,
        default: 'exit',
      }])

      if (option === 'exit') {
        console.log('exiting...')
        exit = true
        continue
      }

      const fn = commandHandlers[option]
      console.log(await fn())
    } catch (e) {
      console.error(e)
    }
  }
}
