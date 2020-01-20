import Game from '../../types/Game'

export default ({ id, title }: Game): string => {
  return `${id}\t"${title}"`
}
