import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IViewCollectorsUI } from './viewCollectors'

const viewCollectors: IUIFunction<IViewCollectorsUI<IUIReturnType>> = ({
  collectors,
  pagination,
}) =>
  collectors
    .map(c => `${c.id}\t"${c.displayName}"\tCreated: ${c.createdDate}`)
    .concat([
      '',
      `Page limit: ${pagination.limit}`,
    ])
    .join('\n')

export default viewCollectors
