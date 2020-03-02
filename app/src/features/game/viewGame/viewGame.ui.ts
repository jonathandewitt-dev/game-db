import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IViewGameUI } from './viewGame'

const viewGame: IUIFunction<IViewGameUI<IUIReturnType>> = g =>
  `${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`

export default viewGame
