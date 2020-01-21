import Phaser from 'phaser'

class MenuScene extends Phaser.Scene {
  constructor(config) {
    super(config)
  }

  init(data) {}
  preload() {}
  create(data) {
    this.add.image(400, 300, 'sky')

    var particles = this.add.particles('red')

    var emitter = particles.createEmitter({
      x: this.game.config.width / 2,
      y: this.game.config.height / 2,

      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    emitter.start()

    this.add.text(0, 0, 'Phaser Framework Boilerplate\nEdit files inside SRC folder to start', {
      fontSize: 24,
      padding: 24,
      fixedWidth: this.game.config.width,
      align: 'center',
    })
  }
  update(time, delta) {}
}

export default new MenuScene({
  key: 'menu',
})
