controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . . . . . . 2 2 2 . 
        . . 2 . . 2 2 2 2 2 2 2 2 . . . 
        . 2 . . . . . 3 . . 3 . . . . . 
        . . . . . . . 3 . . 3 . . . . . 
        . . . . . . . 3 . . 3 . . . . . 
        . . . . . . . 3 . . 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setVelocity(50, 50)
    info.changeScoreBy(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onScore(9000, function () {
    game.gameOver(true)
})
let mySprite: Sprite = null
game.showLongText("Press A", DialogLayout.Top)
