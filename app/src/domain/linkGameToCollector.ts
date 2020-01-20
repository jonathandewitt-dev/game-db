import Collector from './interfaces/Collector'
import Game from './interfaces/Game'

interface GameForCollectorUI<T> {
  ({
    collector,
    game,
  }: {
    collector: Collector
    game: Game
  }): T
}

interface LinkGameToCollectorDB {
  (collectorID: number, gameId: number): Promise<{
    collector: Collector
    game: Game
  }>
}

export default async <T>(
  ui: GameForCollectorUI<T>,
  db: LinkGameToCollectorDB,
  collectorId: number,
  gameId: number,
): Promise<T> =>
  ui(await db(collectorId, gameId))
