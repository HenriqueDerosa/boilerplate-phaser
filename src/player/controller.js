import Phaser from 'phaser'

export default class PlayerController extends Phaser.GameObjects.Sprite {
  constructor(config, input = null) {
    super(config.scene, config.x, config.y, config.key)
    // config.scene.physics.world.enable(this)
    config.scene.add.existing(this)

    this.playerInput = input

    this.anims.play('stand')
  }

  create() {}

  update(time, delta) {
    this.inputControl(this.playerInput)
  }

  inputControl(input) {
    if (input.IsPressed('left')) {
      this.x -= 1
    }
    if (input.IsPressed('right')) {
      this.x += 1
    }
  }
}
