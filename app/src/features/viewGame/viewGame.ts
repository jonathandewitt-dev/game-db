import Game from '../../interfaces/Game'

export interface IViewGameUI<T> {
  (game: Game): T
}

export interface IViewGameDB {
  (id: number): Promise<Game>
}

export default async <T>(ui: IViewGameUI<T>, db: IViewGameDB, id: number): Promise<T> =>
  ui(await db(id))
