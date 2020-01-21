import Game from '../../domain/types/Game'

export default ({ id, title }: Game): string =>
  `${id}\t"${title}"`
