import { GameModel, CollectorModel } from '../../../db/mongo'
import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'

export default async (
  models: { Game: GameModel, Collector: CollectorModel },
  collectorID: Identifier,
  gameId: Identifier,
): Promise<{
  collector: Collector
  game: Game
}> => {
  const collector = await models.Collector.findById(collectorID).populate({ path: 'games' })
  const game = await models.Game.findById(gameId)

  if (!collector.games.includes(gameId)) {
    collector.games.push(gameId)
    await collector.save()
  }

  return { collector, game }
}
