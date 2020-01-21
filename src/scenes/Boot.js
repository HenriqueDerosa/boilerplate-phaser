import Phaser from 'phaser'

import Loading from '~/prefab/loading/loadingBar'
import makeAnimations from '~/animations/player'

class Boot extends Phaser.Scene {
  constructor(config) {
    super(config)

    this.loadNext = this.loadNext.bind(this)
  }

  preload() {
    const loading = new Loading(this.scene)
    loading.initialize(this.loadNext)

    // load assets
    this.load.setBaseURL('http://labs.phaser.io')

    this.load.setBaseURL('https://raw.githubusercontent.com/nkholski/phaser3-es6-webpack/master/')
    // Spritesheets with fixed sizes. Should be replaced with atlas:
    this.load.spritesheet('mario', 'assets/images/mario-sprites.png', {
      frameWidth: 16,
      frameHeight: 32,
    })

    // Beginning of an atlas to replace the spritesheets above. Always use spriteatlases. I use TexturePacker to prepare them.
    // Check rawAssets folder for the TexturePacker project I use to prepare these files.
    this.load.atlas('mario-sprites', 'assets/mario-sprites.png', 'assets/mario-sprites.json')
  }

  loadNext() {
    makeAnimations(this)

    this.scene.start('main')
    this.scene.stop(this)
  }
}

export default new Boot({ key: 'Boot' })
