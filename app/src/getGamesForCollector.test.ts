import getGamesForCollector from './getGamesForCollector'
import VolatileDB from './db/VolatileDB'

describe('get games for collector', () => {
  it('finds and returns collector by id + array of associated games', async () => {
    expect.assertions(1)
    const games = [
      { id: 1, title: 'Blaster Master' },
      { id: 2, title: 'Super Mario Bros. 2' },
      { id: 3, title: 'Kirby\'s Adventure' }
    ]
    const collector = { id: 1, displayName: 'test', games: [1, 3] }
    const volatileDB = new VolatileDB({ collectors: [collector], games })

    const collectorGames = await getGamesForCollector(volatileDB, collector.id)

    expect(collectorGames).toStrictEqual({
      collector,
      games: collector.games.map(gameId => games.find(g => g.id === gameId))
    })
  })
})
