import Phaser, { Game, Scene } from 'phaser'
import Main from '~/scenes/Main'
import Menu from '~/scenes/Menu'

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Main, Menu],
}

new Game(config)
