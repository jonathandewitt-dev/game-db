import Game from '../../../interfaces/Game'

export interface IAddGameUI<T> {
  (game: Game): T
}

export interface IAddGameDB {
  (game: Game): Promise<Game>
}

export default async <T>(ui: IAddGameUI<T>, db: IAddGameDB, game: Game): Promise<T> =>
  ui(await db(game))
