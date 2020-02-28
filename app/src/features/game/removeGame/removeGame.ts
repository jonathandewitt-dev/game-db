import Identifier from '../../../interfaces/Identifier'
import Game from '../../../interfaces/Game'

export interface IRemoveGameUI<T> {
  (game: Game): T
}

export interface IRemoveGameDB {
  (gameId: Identifier): Promise<Game>
}

export default async <T>(ui: IRemoveGameUI<T>, db: IRemoveGameDB, gameId: Identifier): Promise<T> =>
  ui(await db(gameId))
