import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { ILinkGameToCollectorUI } from './linkGameToCollector'

const linkGameToCollector: IUIFunction<ILinkGameToCollectorUI<IUIReturnType>> = ({
  collector: c,
  game: g,
}) => {
  const lines = [
    `Collector: ${c.displayName} (${c.id})\tCreated: ${c.createdDate}`,
    '',
    'id\ttitle'
  ].concat(`${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`)
  return lines.join('\n')
}

export default linkGameToCollector
