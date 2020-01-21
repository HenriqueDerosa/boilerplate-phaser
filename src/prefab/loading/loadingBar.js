import Phaser from 'phaser'

export default class LoadingBar extends Phaser.GameObjects.Sprite {
  constructor({ scene }) {
    super(scene)
    this.scene = scene
  }

  initialize(callback) {
    const loadingText = this.scene.add.text(0, 200, 'Loading...', {
      fontSize: 18,
      fixedWidth: this.scene.game.config.width,
      align: 'center',
    })

    var progressBar = this.scene.add.graphics()
    var progressBox = this.scene.add.graphics()
    progressBox.fillStyle(0x7a4afc, 0.8)
    progressBox.fillRect(240, 270, 320, 50)

    this.scene.load.on('progress', value => {
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 280, 300 * value, 30)
    })

    this.scene.load.on('fileprogress', file => {
      // console.log('> loaded file ',file.src)
    })

    this.scene.load.on('complete', () => {
      progressBar.destroy()
      loadingText.destroy()
      progressBox.destroy()
      callback()
    })
  }
}
