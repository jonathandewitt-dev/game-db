import DB from '../types/DB'
import Game from '../types/Game'

export default class VolatileDB implements DB {
  private readonly _games: Game[] = []

  constructor({ games = [] }: { games: Game[] } = { games: [] }) {
    this._games = games
  }

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
