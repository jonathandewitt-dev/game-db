import Game from '../../../interfaces/Game'

export default ({ id, title }: Game): string =>
  `${id}\t"${title}"`
