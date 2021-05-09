const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const moveFigureReg = /(A|B|C|D|E|F|G|H)(1|2|3|4|5|6|7|8)=>(A|B|C|D|E|F|G|H)(1|2|3|4|5|6|7|8)/g

module.exports = {
  getRandom,
  moveFigureReg,
}
