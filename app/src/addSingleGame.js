import testDB from './testDB.js'

export default game => {
  const newGame = {
    ...game,
    id: testDB.games.length + 1,
  }
  testDB.games.push(newGame)
  return Promise.resolve(newGame)
}
