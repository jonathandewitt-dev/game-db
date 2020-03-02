import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IRemoveGameUI } from './removeGame'

const removeGame: IUIFunction<IRemoveGameUI<IUIReturnType>> = g =>
  `-${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`

export default removeGame
