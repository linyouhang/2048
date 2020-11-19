export default class RandomManager{
  getRandom(){
    while(true){
      if(document.querySelectorAll('.tile').length === 16){
        return
      }
      let randomX = parseInt(Math.floor(Math.random()*4+1))
      let randomY = parseInt(Math.floor(Math.random()*4+1))
      // console.log(this.gridCollection[randomX].children[randomY].textContent)
      if(!document.querySelector('.tile-position-'+randomX+'-'+randomY)){
        return {x: randomX, y: randomY, value: Math.random()<0.9?2:4}
      }
    }
  }
}