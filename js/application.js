import GameManager from './game_manager.js'

export default function application() {
  let gameManager = new GameManager()
  gameManager.start()
}