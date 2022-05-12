input.onButtonPressed(Button.A, function () {
    Compteur += 10
    basic.showNumber(Compteur)
})
input.onButtonPressed(Button.B, function () {
    Compteur += 5
    basic.showNumber(Compteur)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Compteur)
    while (Compteur != 0) {
        Compteur += -1
        basic.showNumber(Compteur)
        basic.pause(1000)
    }
    if (Compteur == 0) {
        basic.showIcon(IconNames.Square)
        soundExpression.giggle.play()
    }
})
let Compteur = 0
basic.showString("321")
Compteur = 0
soundExpression.hello.play()
led.toggle(4, 4)
