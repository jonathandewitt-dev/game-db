import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IAddCollectorUI } from './addCollector'

const addCollector: IUIFunction<IAddCollectorUI<IUIReturnType>> = c =>
  `${c.id}\t"${c.displayName}"\tCreated: ${c.createdDate}`

export default addCollector
