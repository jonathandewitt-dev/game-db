import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'

export interface ILinkGameToCollectorUI<T> {
  ({
    collector,
    game,
  }: {
    collector: Collector
    game: Game
  }): T
}

export interface ILinkGameToCollectorDB {
  (collectorID: Identifier, gameId: Identifier): Promise<{
    collector: Collector
    game: Game
  }>
}

export default async <T>(
  ui: ILinkGameToCollectorUI<T>,
  db: ILinkGameToCollectorDB,
  collectorId: Identifier,
  gameId: Identifier,
): Promise<T> =>
  ui(await db(collectorId, gameId))
