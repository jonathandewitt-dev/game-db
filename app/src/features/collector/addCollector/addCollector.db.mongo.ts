import { CollectorModel } from '../../../db/mongo'
import Collector from '../../../interfaces/Collector'

export default async (
  models: { Collector: CollectorModel },
  collector: Collector
): Promise<Collector> => {
  return models.Collector.create(collector)
}
