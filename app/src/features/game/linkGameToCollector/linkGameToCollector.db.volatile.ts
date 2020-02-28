import Identifier from '../../../interfaces/Identifier'
import DBData from '../../../interfaces/DBData'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'

export default async (
  data: DBData,
  collectorID: Identifier,
  gameId: Identifier,
): Promise<{
  collector: Collector
  game: Game
}> => {
  const collector = data.collectors.find(c => c.id === collectorID)
  const game = data.games.find(g => g.id === gameId)
  if (!collector.games.includes(gameId)) collector.games.push(gameId)
  return Promise.resolve({ collector, game })
}
