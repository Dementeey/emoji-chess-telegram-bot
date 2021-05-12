const { State } = require('./state')
const { Engine } = require('./game')

const state = new State(new Engine())

module.exports = {
  state,
}
