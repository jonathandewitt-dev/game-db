import Game from './types/Game'
import DB from './types/DB'

export default async (db: DB, id: number): Promise<Game> => db.getGame(id)
