export default class InputManager {
  constructor(scene, config = {}) {
    const { isDebug } = config
    this.isDebug = isDebug || false

    this.keys = {
      up: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
    }
  }

  IsPressed(name) {
    return this.keys[name].isDown
  }

  update() {
    this.debug()
  }

  debug() {
    if (!this.isDebug) return
    const keyValues = Object.values(this.keys)

    const pressed = keyValues.filter(x => x.isDown).length > 0
    if (pressed) {
      console.log(keyValues.filter(x => x.isDown).map(k => k.keyCode))
    }
  }
}
