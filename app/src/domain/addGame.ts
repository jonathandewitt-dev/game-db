import Game from '../types/Game'

export interface AddGameUI<T> {
  (game: Game): T
}

export interface AddGameDB {
  (game: Game): Promise<Game>
}

export default async <T>(ui: AddGameUI<T>, db: AddGameDB, game: Game): Promise<T> =>
  ui(await db(game))
