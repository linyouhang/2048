import GridManager from './grid_manager.js'
import InputManager from './input_manager.js'

export default class GameManager{
  inputManager
  gridManager
  constructor(){
    this.inputManager = new InputManager()
    this.gridManager = new GridManager()
  }
  start(){
    //从缓存获取最高分
    if(localStorage.getItem('best')){
      document.getElementById('best').textContent = localStorage.getItem('best')
    }
    else{
      localStorage.setItem('best',0)
    }

    this.gridManager.creatRandomTile()
    this.gridManager.creatRandomTile()
    this.inputManager.listen()

    //neGame初始化游戏
    let btn = document.querySelector('.newGame')
    btn.addEventListener('click',()=>{
      let tiles = document.querySelectorAll('.tile')
      for(let i=0 ;i< tiles.length;i++){
        tiles[i].parentNode.parentNode.removeChild(tiles[i].parentNode)
      }
      if(parseInt(document.getElementById('score').textContent) >parseInt(localStorage.getItem('best'))){
        localStorage.setItem('best', document.getElementById('score').textContent)
      }
      document.getElementById('best').textContent = localStorage.getItem('best')
      document.getElementById('score').textContent = 0
      this.gridManager.creatRandomTile()
      this.gridManager.creatRandomTile()
    })

    //tryAgain初始化游戏
    let tryAgain = document.querySelector('.overButton')
    tryAgain.addEventListener('click',()=>{
      let tiles = document.querySelectorAll('.tile')
      for(let i=0 ;i< tiles.length;i++){
        tiles[i].parentNode.parentNode.removeChild(tiles[i].parentNode)
      }
      document.getElementById('best').textContent = localStorage.getItem('best')
      document.getElementById('score').textContent = 0
      this.gridManager.creatRandomTile()
      this.gridManager.creatRandomTile()
      document.querySelector('.over').style.display = 'none'
    })
  }
}