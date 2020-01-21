import Game from '../../domain/interfaces/Game'

export default ({ id, title }: Game): string =>
  `${id}\t"${title}"`
