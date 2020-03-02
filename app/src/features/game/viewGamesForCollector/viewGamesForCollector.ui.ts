import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IViewGamesForCollectorUI } from './viewGamesForCollector'

const viewGamesForCollector: IUIFunction<IViewGamesForCollectorUI<IUIReturnType>> = ({
  collector: c,
  games,
  pagination,
}) => {
  const lines = [
    `Collector: ${c.displayName} (${c.id})\tCreated: ${c.createdDate}`,
    '',
    'id\ttitle'
  ].concat(
    games.map(g => `${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`)
  ).concat([
    '',
    `Page limit: ${pagination.limit}`
  ])
  return lines.join('\n')
}

export default viewGamesForCollector
