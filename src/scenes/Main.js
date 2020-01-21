import Phaser from 'phaser'
import PlayerController from '~/player/controller'
import InputManager from '~/core/inputManager'

class MainScene extends Phaser.Scene {
  constructor(config) {
    super(config)
  }

  init(data) {}
  preload() {}

  create(data) {
    this.input = new InputManager(this)
    this.mario = new PlayerController(
      {
        scene: this,
        key: 'mario',
        x: this.sys.game.config.width / 2 - 16,
        y: this.sys.game.config.height - 48 - 48,
        input: this.input,
      },
      this.input
    )

    this.add.text(0, 0, 'Welcome!', {
      fontSize: 24,
      padding: 24,
      fixedWidth: this.game.config.width,
      align: 'center',
    })
  }

  update(time, delta) {
    this.input.update()
    this.mario.update(time, delta)
  }
}

export default new MainScene({
  key: 'main',
})
