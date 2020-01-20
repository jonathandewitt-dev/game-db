import getGamesForCollector from './getGamesForCollector'
import VolatileDB from './db/VolatileDB'

describe('get games for collector', () => {
  it('finds and returns collector by id + a page of associated games', async () => {
    expect.assertions(1)

    const dbData = {
      collectors: [
        { id: 1, displayName: 'Game Collector 001', games: [1, 3, 4, 6] }
      ],
      games: [
        { id: 1, title: 'Blaster Master' },
        { id: 2, title: 'Super Mario Bros. 2' },
        { id: 3, title: 'Kirby\'s Adventure' },
        { id: 4, title: 'Ninja Gaiden' },
        { id: 5, title: 'Shatterhand' },
        { id: 6, title: 'Teenage Mutant Ninja Turtles' },
      ],
    }
    const volatileDB = new VolatileDB(dbData)
    const collector = dbData.collectors[0]
    const pagination = {
      limit: 3,
      firstId: 0
    }
    const result = await getGamesForCollector(volatileDB, collector.id, pagination)

    const expectedGameIds = collector.games.slice(0, pagination.limit)
    expect(result).toStrictEqual({
      collector: {
        id: collector.id,
        displayName: collector.displayName,
      },
      games: expectedGameIds.map(gameId => dbData.games.find(g => g.id === gameId)),
      pagination: {
        limit: pagination.limit,
        firstId: expectedGameIds[0],
        lastId: expectedGameIds[expectedGameIds.length - 1],
      }
    })
  })
})
