import Game from './types/Game'

interface AddGameUI<T> {
  (game: Game): T
}

interface AddGameDB {
  (game: Game): Promise<Game>
}

export default async <T>(ui: AddGameUI<T>, db: AddGameDB, game: Game): Promise<T> =>
  ui(await db(game))
