import { CollectorModel } from '../../../db/mongo'
import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'

export default async (
  models: { Collector: CollectorModel },
  collectorId: Identifier
): Promise<Collector> => {
  return models.Collector.findByIdAndDelete(collectorId)
}
