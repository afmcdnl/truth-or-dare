let Random = 0
input.onButtonPressed(Button.A, function () {
    Random = Math.randomRange(0, 1)
    if (Random == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
