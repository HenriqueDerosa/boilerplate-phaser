import Phaser, { Game, Scene } from 'phaser'
import Boot from '~/scenes/Boot'
import MainScene from '~/scenes/Main'
import MenuScene from '~/scenes/Menu'
import config from './core/config'

const gameConfig = Object.assign(config, {
  scene: [Boot, MainScene, MenuScene],
})

class PhaserGame extends Phaser.Game {
  constructor() {
    super(gameConfig)
  }
}

window.game = new PhaserGame()
