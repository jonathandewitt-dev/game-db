import Collector from '../../../interfaces/Collector'

export default ({ id, displayName, createdDate }: Collector): string =>
  `${id}\t"${displayName}"\tCreated: ${createdDate}`
