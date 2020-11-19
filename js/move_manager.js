import GridManager from './grid_manager.js'

export default class MoveManager{
  constructor(){
    this.gridManager = new GridManager()
  }
  moveLeft(){
    //从左到右遍历网格
    for(let i=1;i<5;i++){
      for(let j=1;j<5;j++){
        let tile = this.gridManager.getTile(i,j)
        if(tile){
          if(i === 1){
            continue
          }
          else{
            for(let k=1;k<i;k++){
              if(this.isLeftSpace(k,i,j)){
                this.gridManager.updateTile({x: i, y: j},{x: k , y: j, value: parseInt(tile.textContent)})
                break
              }
              else if( this.gridManager.getTile(k,j).textContent === tile.textContent && this.isLeftSpace(k+1,i,j)){
                let value = tile.textContent *2
                document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent)+value
                this.gridManager.deleteTile(k,j)
                this.gridManager.updateTile({x: i, y: j},{x: k, y: j, value: value})
                break
              }
            }
            continue
          }
        }
      }
    }
    this.gridManager.creatRandomTile()
    if(this.isOver()){
      if(parseInt(document.getElementById('score').textContent) >parseInt(localStorage.getItem('best'))){
        localStorage.setItem('best', document.getElementById('score').textContent)
      }
      document.querySelector('.over').style.display = 'block'
      return
    }
  }
  moveRight(){
    //从右到左遍历网格
    for(let i=4;i>0;i--){
      for(let j=1;j<5;j++){
        let tile = this.gridManager.getTile(i,j)
        if(tile){
          if(i === 4){
            continue
          }
          else{
            for(let k=4;k>i;k--){
              if(this.isRightSpace(k,i,j)){
                this.gridManager.updateTile({x: i, y: j},{x: k , y: j, value: parseInt(tile.textContent)})
                break
              }
              else if(this.isRightSpace(k-1,i,j) && this.gridManager.getTile(k,j).textContent === tile.textContent){
                let value = tile.textContent *2
                document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent)+value
                this.gridManager.deleteTile(k,j)
                this.gridManager.updateTile({x: i, y: j},{x: k, y: j, value: value})
                break
              }
            }
          }
        }
      }
    }
    this.gridManager.creatRandomTile()
    if(this.isOver()){
      if(parseInt(document.getElementById('score').textContent) >parseInt(localStorage.getItem('best'))){
        localStorage.setItem('best', document.getElementById('score').textContent)
      }
      document.querySelector('.over').style.display = 'block'
      return
    }
  }
  moveUp(){
    //从上到下遍历网格
    for(let j=1;j<5;j++){
      for(let i=1;i<5;i++){
        let tile = this.gridManager.getTile(i,j)
        if(tile){
          if(j === 1){
            continue
          }
          else{
            for(let k=1;k<j;k++){
              if(this.isupSpace(k,i,j)){
                this.gridManager.updateTile({x: i, y: j},{x: i , y: k, value: parseInt(tile.textContent)})
                break
              }
              else if(this.isupSpace(k+1,i,j) && this.gridManager.getTile(i,k).textContent === tile.textContent){
                let value = tile.textContent *2
                document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent)+value
                this.gridManager.deleteTile(i,k)
                this.gridManager.updateTile({x: i, y: j},{x: i, y: k, value: value})
                break
              }
            }
          }
        }
      }
    }
    this.gridManager.creatRandomTile()
    if(this.isOver()){
      if(parseInt(document.getElementById('score').textContent) >parseInt(localStorage.getItem('best'))){
        localStorage.setItem('best', document.getElementById('score').textContent)
      }
      document.querySelector('.over').style.display = 'block'
      return
    }
  }
  moveDown(){
    //从下到上遍历网格
    for(let j=4;j>0;j--){
      for(let i=1;i<5;i++){
        let tile = this.gridManager.getTile(i,j)
        if(tile){
          if(j === 4){
            continue
          }
          else{
            for(let k=4;k>j;k--){
              if(this.isDownSpace(k,i,j)){
                this.gridManager.updateTile({x: i, y: j},{x: i , y: k, value: parseInt(tile.textContent)})
                break
              }
              else if(this.isDownSpace(k-1,i,j) && this.gridManager.getTile(i,k).textContent === tile.textContent){
                let value = tile.textContent *2
                document.getElementById('score').textContent = parseInt(document.getElementById('score').textContent)+value
                this.gridManager.deleteTile(i,k)
                this.gridManager.updateTile({x: i, y: j},{x: i, y: k, value: value})
                break
              }
            }
          }
        }
      }
    }
    this.gridManager.creatRandomTile()
    if(this.isOver()){
      if(parseInt(document.getElementById('score').textContent) >parseInt(localStorage.getItem('best'))){
        localStorage.setItem('best', document.getElementById('score').textContent)
      }
      document.querySelector('.over').style.display = 'block'
      return
    }
  }
  isDownSpace(k,i,j){
    for(k;k>j;k--){
      if(this.gridManager.getTile(i,k)){
        return false
      }
    }
    return true
  }
  isRightSpace(k,i,j){
    for(k;k>i;k--){
      if(this.gridManager.getTile(k,j)){
        return false
      }
    }
    return true
  }
  isupSpace(k,i,j){
    for(k;k<j;k++){
      if(this.gridManager.getTile(i,k)){
        return false
      }
    }
    return true
  }
  isLeftSpace(k,i,j){
    for(k;k<i;k++){
      if(this.gridManager.getTile(k,j)){
        return false
      }
    }
    return true
  }
  isOver(){
    if(document.querySelectorAll('.tile').length === 16){
      let self = this.gridManager.getTile
      for(let i=1;i<5;i++){
        for(let j=1;j<5;j++){
          let tile = self(i,j)
          if(self(i-1,j)===null?null:self(i-1,j).textContent === tile.textContent){
            return false
          }
          else if(self(i+1,j)===null?null:self(i+1,j).textContent === tile.textContent){
            return false
          }
          else if(self(i,j-1)===null?null:self(i,j-1).textContent === tile.textContent){
            return false
          }
          else if(self(i,j+1)===null?null:self(i,j+1).textContent === tile.textContent){
            return false
          }
        }
      }
      return true
    }
  }
}
