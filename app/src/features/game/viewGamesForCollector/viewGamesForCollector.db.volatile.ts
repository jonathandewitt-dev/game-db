import Identifier from '../../../interfaces/Identifier'
import DBData from '../../../interfaces/DBData'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default async (
  data: DBData,
  collectorID: Identifier,
  pagination: Pagination
): Promise<{
  collector: Collector
  games: Game[]
  pagination: Pagination
}> => {
  const collector = data.collectors.find(c => c.id === collectorID)
  // @ts-ignore
  collector.games.sort((a, b) => a - b)

  const gameIds = collector.games.filter(
    id => id >= pagination.firstId && (pagination.lastId === undefined || id <= pagination.lastId)
  ).slice(0, pagination.limit)
  const games = gameIds.map(id => data.games.find(g => g.id === id))

  return Promise.resolve({
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
  })
}
