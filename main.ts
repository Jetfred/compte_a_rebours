input.onButtonPressed(Button.A, function () {
    Compteur += 10
    basic.showNumber(Compteur)
    Last_game = Compteur
})
input.onButtonPressed(Button.B, function () {
    Compteur += 5
    basic.showNumber(Compteur)
    Last_game = Compteur
})
input.onGesture(Gesture.Shake, function () {
    Compteur = Last_game
    basic.showNumber(Compteur)
    basic.clearScreen()
    while (Compteur != 0) {
        Compteur += -1
        basic.pause(1000)
        led.toggle(2, 2)
    }
    if (Compteur == 0) {
        soundExpression.giggle.play()
        while (true) {
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Target)
        }
    }
})
let Last_game = 0
let Compteur = 0
basic.showString("321")
Compteur = 0
soundExpression.hello.play()
soundExpression.hello.play()
led.setBrightness(109)
