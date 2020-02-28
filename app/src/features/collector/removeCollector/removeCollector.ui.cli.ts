import Collector from '../../../interfaces/Collector'

export default ({ id, displayName }: Collector): string =>
  `-${id}\t"${displayName}"`
