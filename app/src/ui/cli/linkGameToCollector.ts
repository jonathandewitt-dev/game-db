import Collector from '../../domain/interfaces/Collector'
import Game from '../../domain/interfaces/Game'

export default ({
  collector,
  game,
}: {
  collector: Collector
  game: Game
}): string => {
  const lines = [
    `Collector: ${collector.displayName} (${collector.id})`,
    '',
    'id\ttitle'
  ].concat(`${game.id}\t"${game.title}"`)
  return lines.join('\n')
}
