import MoveManager from './move_manager.js'

export default class InputManager{
  moveManager
  constructor(){
    this.moveManager = new MoveManager()
  }
  emit(direction){
    switch(direction){
      case 0:
        this.moveManager.moveUp()
        break
      case 1:
        this.moveManager.moveRight()
        break
      case 2:
        this.moveManager.moveDown()
        break
      case 3:
        this.moveManager.moveLeft()
        break
      default:
        console.log('无效滑动')
    }
  }
  listen(){
  let self = this
  let element = document.querySelector('.game-container')
  let startX,startY,endX,endY,dx,dy,absDx,absDy
  //通过touch事件判断左右上下滑动
  //0：上
  //1：右
  //2：下
  //3：左
  //-1：无效滑动
  function start(ev){
    if(ev.changedTouches.length>1){
      return //不允许超过1个手指滑动
    }
    startX = ev.changedTouches[0].pageX
    startY = ev.changedTouches[0].pageY
    ev.preventDefault()
  }
  function move(ev){
    ev.preventDefault()
  }
  function end(ev){
    endX = ev.changedTouches[0].pageX
    endY = ev.changedTouches[0].pageY
    dx = endX - startX
    dy = endY - startY
    absDx = Math.abs(dx)
    absDy = Math.abs(dy)
    if(dx === 0 && dy ===0){
      return//单点无效
    }
    self.emit(absDx > absDy ? (dx> 0 ? 1 : 3) : (dy > 0 ? 2 : 0))
  }
  element.addEventListener('touchstart',start)
  element.addEventListener('touchmove', move)
  element.addEventListener('touchend', end)
  }
}