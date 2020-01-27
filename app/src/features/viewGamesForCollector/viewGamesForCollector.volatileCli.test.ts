import createUI from '../../cliUI'
import createDB from '../../volatileDB'
import viewGamesForCollector from './viewGamesForCollector'

describe('view games associated with a collector', () => {
  it('finds and returns collector by id + a page of associated games', async () => {
    expect.assertions(1)

    const ui = await createUI()
    const dbData = {
      collectors: [
        { id: 1, displayName: 'Game Collector 001', games: [1, 3, 4, 6] },
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
    const db = await createDB(dbData)
    const collector = dbData.collectors[0]
    const pagination = {
      limit: 3,
      firstId: 0,
    }
    const result = await viewGamesForCollector(
      ui.viewGamesForCollector,
      db.getGamesForCollector,
      collector.id,
      pagination,
    )

    expect(result).toStrictEqual(
`Collector: Game Collector 001 (1)

id\ttitle
1\t"Blaster Master"
3\t"Kirby's Adventure"
4\t"Ninja Gaiden"

Page limit: 3`
    )
  })
})
