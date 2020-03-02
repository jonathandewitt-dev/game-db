import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IRemoveCollectorUI } from './removeCollector'

const removeCollector: IUIFunction<IRemoveCollectorUI<IUIReturnType>> = c =>
  `-${c.id}\t"${c.displayName}"\tCreated: ${c.createdDate}`

export default removeCollector
