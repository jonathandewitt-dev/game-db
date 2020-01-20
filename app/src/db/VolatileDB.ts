import DB from '../types/DB'
import Collector from '../types/Collector'
import Game from '../types/Game'

export default class VolatileDB implements DB {
  private readonly _collectors: Collector[] = []
  private readonly _games: Game[] = []

  constructor({
    collectors = [],
    games = [],
  }: {
    collectors?: Collector[]
    games?: Game[]
  } = {}) {
    this._collectors = collectors
    this._games = games
  }

  async getCollectorGames(collectorID: number): Promise<{ collector: Collector, games: Game[] }> {
    const collector = this._collectors.find((u: Collector) => u.id === collectorID)
    return {
      collector,
      games: await Promise.all<Game>(collector.games.map(this.getGame.bind(this))),
    }
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
