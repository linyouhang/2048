export default class Tile {
  x
  y
  value
  previousPosition = null
  constructor(coordinate){
    this.x = coordinate.x
    this.y = coordinate.y
    this.value = coordinate.value
  }
  savePosition() {
    this.previousPosition = { x: this.x, y: this.y }
  }
  updatePosition(position) {
    this.x = position.x
    this.y = position.y
  }
  serialize() {
    return {
      position: {
        x: this.x,
        y: this.y
      },
      value: this.value
    }
  }
}