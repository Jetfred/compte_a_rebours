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
    if (Compteur != 0) {
        Compteur += -1
        basic.showNumber(Compteur)
        Compteur += -1
        led.toggle(4, 4)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Heart)
        soundExpression.yawn.play()
    }
})
let Compteur = 0
basic.showString("321")
Compteur = 0
soundExpression.hello.play()
