import { IDBFunction } from '../../../db/mongo'
import { ILinkGameToCollectorDB } from './linkGameToCollector'

const linkGameToCollector: IDBFunction<ILinkGameToCollectorDB> = async (
  models,
  collectorID,
  gameId
) => {
  const collector = await models.Collector
    .findById(collectorID)
    .populate({ path: 'games' })

  const game = await models.Game.findById(gameId)

  if (!collector.games.includes(gameId)) {
    collector.games.push(gameId)
    await collector.save()
  }

  return {
    collector: collector.toObject(),
    game: game.toObject(),
  }
}

export default linkGameToCollector
