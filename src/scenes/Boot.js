import Phaser from 'phaser'

import Loading from '~/prefab/loading/loadingBar'

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
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  loadNext() {
    setTimeout(() => {
      this.scene.start('main')
      this.scene.stop(this)
    }, 1000)
  }
}

export default new Boot({ key: 'Boot' })
