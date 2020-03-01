import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'

export default ({
  collector,
  game,
}: {
  collector: Collector
  game: Game
}): string => {
  const lines = [
    `Collector: ${collector.displayName} (${collector.id})\tCreated: ${collector.createdDate}`,
    '',
    'id\ttitle'
  ].concat(`${game.id}\t"${game.title}"\tCreated: ${game.createdDate}`)
  return lines.join('\n')
}
