class SoundEffects {
    constructor() {
        this.shootSound = [
            new Audio('src/assets/audios/shoot.mp3'),
            new Audio('src/assets/audios/shoot.mp3'),
            new Audio('src/assets/audios/shoot.mp3'),
            new Audio('src/assets/audios/shoot.mp3'),
            new Audio('src/assets/audios/shoot.mp3')
        ]

         this.onHitSound = [
            new Audio('src/assets/audios/hit.mp3'),
            new Audio('src/assets/audios/hit.mp3'),
            new Audio('src/assets/audios/hit.mp3'),
            new Audio('src/assets/audios/hit.mp3'),
            new Audio('src/assets/audios/hit.mp3')
        ]

        this.explosionSound = new Audio('src/assets/audios/explosion.mp3')
        this.nextLevelSound = new Audio('src/assets/audios/next_level.mp3')

        this.currentShootSound = 0
        this.currentHitSound = 0

        this.adjustVolumes()
    }

    playExplosionSound() {
        this.explosionSound.play()
    }
     playShootSound() {
        this.shootSound[this.currentShootSound].currentTime = 0
        this.shootSound[this.currentShootSound].play()
        this.currentShootSound = (this.currentShootSound + 1) % this.shootSound.length
        }

     playNextLevelSound() {
        this.nextLevelSound.play()
    }

     playOnHitSound() {
         this.onHitSound[this.currentHitSound].currentTime = 0
        this.onHitSound[this.currentHitSound].play()
        this.currentHitSound = (this.currentHitSound + 1) % this.onHitSound.length
    }

    adjustVolumes() {
        this.onHitSound.forEach((sound => sound.volume = 0.2))
        this.shootSound.forEach((sound => sound.volume = 0.5))
        this.explosionSound.volume = 0.2
         this.nextLevelSound.volume = 0.4
    }
}

export default SoundEffects