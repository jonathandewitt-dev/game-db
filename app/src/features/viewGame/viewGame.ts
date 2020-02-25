import Identifier from '../../interfaces/Identifier'
import Game from '../../interfaces/Game'

export interface IViewGameUI<T> {
  (game: Game): T
}

export interface IViewGameDB {
  (gameId: Identifier): Promise<Game>
}

export default async <T>(ui: IViewGameUI<T>, db: IViewGameDB, gameId: Identifier): Promise<T> =>
  ui(await db(gameId))
