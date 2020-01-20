import Collector from './types/Collector'
import Game from './types/Game'
import DB from './types/DB'

export default async (
  db: DB,
  collectorId: number
): Promise<{
  collector: Collector
  games: Game[]
}> =>
  db.getGamesForCollector(collectorId)
