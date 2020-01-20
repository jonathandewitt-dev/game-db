import DB from '../types/DB'
import Game from '../types/Game'

interface AddGameUI<T> {
  (game: Game): T
}

export default async <T>(ui: AddGameUI<T>, db: DB, game: Game): Promise<T> =>
  ui(await db.addGame(game))
