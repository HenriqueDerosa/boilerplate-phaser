import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
  constructor(config) {
    super(config)
  }

  init(data) {}

  preload() {
    this.load.setBaseURL('http://labs.phaser.io')

    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }
  create(data) {
    this.add.image(400, 300, 'sky')

    var particles = this.add.particles('red')

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    var logo = this.physics.add.image(100, 100, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.startFollow(logo)

    this.add.text(0, 0, 'Welcome!', {
      fontSize: 24,
      padding: 24,
      fixedWidth: this.game.config.width,
      align: 'center',
    })
  }
  update(time, delta) {
    if (time > 3000) {
      this.game.scene.stop(this)
      this.game.scene.start('menu')
    }
  }
}

export default new MainScene({
  key: 'main',
})
