import { IDBFunction, paginateQuery } from '../../../db/mongo'
import { IViewGamesDB } from './viewGames'

const viewGames: IDBFunction<IViewGamesDB> = async (models, pagination) => {
  const games = await paginateQuery(models.Game, pagination).exec()
  return { games, pagination }
}

export default viewGames
