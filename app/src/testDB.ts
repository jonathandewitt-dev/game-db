import DB from './types/DB'
import Game from './types/Game'

class TestDB implements DB {
  private readonly _games: Game[] = [
    {
      id: 1,
      title: 'Blaster Master',
    },
    {
      id: 2,
      title: 'Super Mario Bros 2',
    },
  ]

  async getGame(id: number): Promise<Game> {
    return Promise.resolve(this._games.find((g: Game) => g.id === id))
  }

  async addGame(game: Game): Promise<Game> {
    const newGame = {
      ...game,
      id: this._games.length + 1,
    }
    this._games.push(newGame)
    return Promise.resolve(newGame)
  }
}

export default TestDB
