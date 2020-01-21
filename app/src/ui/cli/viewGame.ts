import Game from '../../types/Game'

export default ({ id, title }: Game): string =>
  `${id}\t"${title}"`
