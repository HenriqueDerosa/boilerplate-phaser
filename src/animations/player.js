export default function makeAnimations(scene) {
  scene.anims.create({
    key: 'run',
    frames: scene.anims.generateFrameNames('mario-sprites', {
      prefix: 'mario/walk',
      start: 1,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
    repeatDelay: 0,
  })

  scene.anims.create({
    key: 'death',
    frames: scene.anims.generateFrameNumbers('mario', {
      start: 22,
      end: 22,
    }),
  })
  scene.anims.create({
    key: 'stand',
    frames: scene.anims.generateFrameNumbers('mario', {
      start: 1,
      end: 1,
    }),
  })
}
