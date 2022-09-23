/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

const circleLineRed = (radius) => {
  let diameter = radius * 2
  let x = 0
  while (x < width - diameter) {
    drawFilledCircle(diameter + x, height / 2, radius, 'red')
    x += diameter
  }
}
//circleLineRed(12)


const circleLine = (radius) => {
  let diameter = radius * 2
  let x = 0
  let c = 'red'
  while (x < width - diameter) {
    drawFilledCircle(diameter + x, height / 2, radius, c)
    x += diameter
    if (c == 'red') {
      c = 'blue'
    } else { c = 'red' }
  }
}
//circleLine(12)

const dartboard = (howManyCircles) => {
  let radius = width / 2
  let c = 'red'
  while (radius > width / 6 / howManyCircles) {
    drawFilledCircle(width / 2, height / 2, radius, c)
    radius = radius - width / 2 / howManyCircles
    if (c == 'red') {
      c = 'blue'
    } else { c = 'red' }
  }
}
//dartboard(12);


