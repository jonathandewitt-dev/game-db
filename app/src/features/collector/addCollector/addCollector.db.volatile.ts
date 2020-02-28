import DBData from '../../../interfaces/DBData'
import Collector from '../../../interfaces/Collector'

export default async (data: DBData, collector: Collector): Promise<Collector> => {
  const newCollector = {
    ...collector,
    id: data.collectors.length + 1,
  }
  data.collectors.push(newCollector)
  return Promise.resolve(newCollector)
}
