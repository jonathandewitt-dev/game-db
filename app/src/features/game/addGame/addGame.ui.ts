import { IUIFunction, IUIReturnType } from '../../../ui/cli'
import { IAddGameUI } from './addGame'

const addGame: IUIFunction<IAddGameUI<IUIReturnType>> = g =>
  `${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`

export default addGame
