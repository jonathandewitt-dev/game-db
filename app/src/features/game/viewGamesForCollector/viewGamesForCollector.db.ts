import { IDBFunction, paginateQuery } from '../../../db/mongo'
import { IViewGamesForCollectorDB } from './viewGamesForCollector'

const viewGamesForCollector: IDBFunction<IViewGamesForCollectorDB> = async (
  models,
  collectorId,
  pagination
) => {
  const collector = await models.Collector.findById(collectorId)

  const games = await paginateQuery(models.Game, pagination, {
    _id: { $in: collector.games }
  }).exec()

  return { collector, games, pagination }
}

export default viewGamesForCollector
