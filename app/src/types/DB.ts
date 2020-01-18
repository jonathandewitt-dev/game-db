import Game from './Game'

export default interface DB {
  getGame(id: number): Promise<Game>
  addGame(game: Game): Promise<Game>
}
