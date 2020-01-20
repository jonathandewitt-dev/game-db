import DB from '../types/DB'
import Collector from '../types/Collector'
import Game from '../types/Game'
import Pagination from 'Pagination'

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

  async getGamesForCollector(collectorID: number, pagination: Pagination): Promise<{
    collector: Collector
    games: Game[]
    pagination: Pagination
  }> {
    const collector = this._collectors.find(c => c.id === collectorID)
    collector.games.sort((a, b) => a - b)

    const gameIds = collector.games.filter(
      id => id >= pagination.firstId && (pagination.lastId === undefined || id <= pagination.lastId)
    ).slice(0, pagination.limit)
    const games = await Promise.all<Game>(gameIds.map(this.getGame.bind(this)))

    return {
      collector: {
        id: collector.id,
        displayName: collector.displayName,
      },
      games,
      pagination: {
        limit: pagination.limit,
        firstId: games[0]?.id ?? -1,
        lastId: games[games.length - 1]?.id ?? -1,
      }
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
