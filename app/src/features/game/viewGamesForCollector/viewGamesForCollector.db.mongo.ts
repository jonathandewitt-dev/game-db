import { CollectorModel, GameModel, paginateQuery } from '../../../db/mongo'
import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default async (
  models: {
    Collector: CollectorModel
    Game: GameModel
  },
  collectorId: Identifier,
  pagination: Pagination
): Promise<{
  collector: Collector
  games: Game[]
  pagination: Pagination
}> => {
  const collector = await models.Collector.findById(collectorId)

  const games = await paginateQuery(models.Game, pagination, {
    _id: { $in: collector.games }
  }).exec()

  return { collector, games, pagination }
}
