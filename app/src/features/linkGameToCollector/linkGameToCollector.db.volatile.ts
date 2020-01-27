import DBData from '../../interfaces/DBData'
import Collector from '../../interfaces/Collector'
import Game from '../../interfaces/Game'

export default async (
  data: DBData,
  collectorID: number,
  gameId: number,
): Promise<{
  collector: Collector
  game: Game
}> => {
  const collector = data.collectors.find(c => c.id === collectorID)
  const game = data.games.find(g => g.id === gameId)
  if (!collector.games.includes(gameId)) collector.games.push(gameId)
  return Promise.resolve({ collector, game })
}
