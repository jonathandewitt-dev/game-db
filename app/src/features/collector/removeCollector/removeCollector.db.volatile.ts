import DBData from '../../../interfaces/DBData'
import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'

export default async (data: DBData, collectorId: Identifier): Promise<Collector> => {
  const index = data.collectors.findIndex(g => g.id === collectorId)
  const [collector] = data.collectors.splice(index, 1)
  return Promise.resolve(collector)
}
