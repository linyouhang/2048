import RandomManager from './random_manager.js'

export default class GridManager{
  randomManager
  tileContainer
  constructor(){
    this.tileContainer = document.querySelector('.tile-container')
    this.randomManager = new RandomManager()
  }
  creatRandomTile(){
    let tile = this.randomManager.getRandom()
    if(tile){
      let newTile = document.createElement('div')
      newTile.innerHTML = `<div class='tile tile-new tile-move tile-${tile.value} tile-position-${tile.x}-${tile.y}'>${tile.value}</div>`
      this.tileContainer.appendChild(newTile)
    }
  }
  updateTile(oldTile,newTile){
    this.getTile(oldTile.x,oldTile.y).textContent = newTile.value
    this.getTile(oldTile.x,oldTile.y).className=`tile tile-move tile-${newTile.value} tile-position-${newTile.x}-${newTile.y}`
  }
  getTile(x,y){
    return document.querySelector(`.tile-position-${x}-${y}`)
  }
  deleteTile(x,y){
    let tile = document.querySelector(`.tile-position-${x}-${y}`).parentNode
    tile.parentNode.removeChild(tile)
  }
}