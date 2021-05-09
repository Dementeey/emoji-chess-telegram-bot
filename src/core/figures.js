//Типы фигур

// король
const FIGURE_TYPE_KING = 1
// ферзь
const FIGURE_TYPE_QUEEN = 2
// ладья
const FIGURE_TYPE_ROOK = 3
// слон
const FIGURE_TYPE_BISHOP = 4
// конь
const FIGURE_TYPE_KNIGHT = 5
// пешка
const FIGURE_TYPE_PAWN = 6

// цвета фигур
const FIGURE_COLOR_BLACK = 'black'
const FIGURE_COLOR_WHITE = 'white'

// флаг короткой рокировки
const CASTLING_O_O = ''
// флаг длинной рокировки
const CASTLING_O_O_O = ''

module.exports = {
  FIGURE_TYPE_KING,
  FIGURE_TYPE_QUEEN,
  FIGURE_TYPE_ROOK,
  FIGURE_TYPE_BISHOP,
  FIGURE_TYPE_KNIGHT,
  FIGURE_TYPE_PAWN,
  FIGURE_COLOR_BLACK,
  FIGURE_COLOR_WHITE,
}
