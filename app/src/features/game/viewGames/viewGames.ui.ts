import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IViewGamesUI } from './viewGames'

const viewGames: IUIFunction<IViewGamesUI<IUIReturnType>> = ({
  games,
  pagination,
}) =>
  games.map(g => `${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`)
    .concat([
      '',
      `Page limit: ${pagination.limit}`
    ])
    .join('\n')

export default viewGames
