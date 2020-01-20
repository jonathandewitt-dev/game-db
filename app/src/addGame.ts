import Game from './types/Game'
import DB from './types/DB'

export default async (db: DB, game: Game): Promise<Game> => db.addGame(game)
