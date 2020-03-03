import { IDBFunction, paginateQuery } from '../../../db/mongo'
import { IViewCollectorsDB } from './viewCollectors'

const viewCollectors: IDBFunction<IViewCollectorsDB> = async (models, pagination) => {
  const collectors = await paginateQuery(models.Collector, pagination).exec()
  return {
    collectors: collectors.map(c => c.toObject()),
    pagination,
  }
}

export default viewCollectors
