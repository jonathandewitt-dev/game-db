import testDB from './testDB.js'

export default id => Promise.resolve(testDB.games.find(g => g.id === id))
