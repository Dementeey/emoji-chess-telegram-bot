class State {
  constructor() {}
  _state = {
    white: true,
    black: false,
    isGameStarted: false,
    messageId: null,
  }

  _setState(name, value) {
    this._state = {
      ...this._state,
      [name]: value,
    }
  }

  get state() {
    return this._state
  }

  startGame(messageId) {
    if (this._state.isGameStarted) {
      console.error(new Error('The game has already started!'))
    }

    this._setState('isGameStarted', true)
    this._setState('messageId', messageId)
  }

  endGame() {
    if (!this._state.isGameStarted) {
      console.error(new Error('The game is already over!'))
    }

    this._setState('isGameStarted', false)
  }

  reshapeColor() {
    if (this._state.isGameStarted) {
      console.error(new Error('The game has already started!'))
    }

    const oldBlackColor = this._state.black
    const oldWhiteColor = this._state.white

    this._setState('white', oldBlackColor)
    this._setState('black', oldWhiteColor)
  }
}

module.exports = {
  State,
}
