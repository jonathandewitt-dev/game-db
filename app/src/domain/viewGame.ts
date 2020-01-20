import DB from '../types/DB'
import Game from '../types/Game'

interface GameUI<T> {
  (game: Game): T
}

export default async <T>(ui: GameUI<T>, db: DB, id: number): Promise<T> =>
  ui(await db.getGame(id))
