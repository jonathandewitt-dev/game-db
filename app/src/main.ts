import createUI from './cliUI'
import createDB from './volatileDB'
import addGame from './features/addGame/addGame'
import viewGame from './features/viewGame/viewGame'
import viewGamesForCollector from './features/viewGamesForCollector/viewGamesForCollector'
import linkGameToCollector from './features/linkGameToCollector/linkGameToCollector'
import inquirer from 'inquirer'

export default async ({ env, args }: { env: string, args: string[] }): Promise<void> => {
  const ui = await createUI()

  const db = await createDB({
    collectors: [
      { id: 1, displayName: 'Game Collector 001', games: [1, 3, 4, 6] },
    ],
    games: [
      { id: 1, title: 'Blaster Master' },
      { id: 2, title: 'Super Mario Bros. 2' },
      { id: 3, title: 'Kirby\'s Adventure' },
      { id: 4, title: 'Ninja Gaiden' },
      { id: 5, title: 'Shatterhand' },
      { id: 6, title: 'Teenage Mutant Ninja Turtles' },
    ],
  })

  const commandHandlers: any = {
    viewGame: async () => {
      const { id } = await inquirer.prompt([{
        name: 'id',
        message: 'Enter game id:',
        type: 'number',
        default: 0,
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

    viewGamesForCollector: async () => {
      const { collectorId, limit, firstId } = await inquirer.prompt([
        { name: 'collectorId', message: 'Enter collectorId:', type: 'number' },
        { name: 'limit', message: 'Enter limit:', type: 'number', default: 25 },
        { name: 'firstId', message: 'Enter firstId:', type: 'number', default: 0 },
      ])
      return viewGamesForCollector(ui.viewGamesForCollector, db.getGamesForCollector, collectorId, {
        limit,
        firstId,
      })
    },

    linkGameToCollector: async () => {
      const { collectorId, gameId } = await inquirer.prompt([
        { name: 'collectorId', message: 'Enter collectorId:', type: 'number' },
        { name: 'gameId', message: 'Enter gameId:', type: 'number' },
      ])
      return linkGameToCollector(ui.linkGameToCollector, db.linkGameToCollector, collectorId, gameId)
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
