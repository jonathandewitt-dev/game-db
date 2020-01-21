import Game from '../types/Game'

interface GameUI<T> {
  (game: Game): T
}

interface GetGameDB {
  (id: number): Promise<Game>
}

export default async <T>(ui: GameUI<T>, db: GetGameDB, id: number): Promise<T> =>
  ui(await db(id))
