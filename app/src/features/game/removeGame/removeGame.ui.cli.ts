import Game from '../../../interfaces/Game'

export default ({ id, title, createdDate }: Game): string =>
  `-${id}\t"${title}"\tCreated: ${createdDate}`
