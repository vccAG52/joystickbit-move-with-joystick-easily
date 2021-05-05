joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showNumber(joystickbit.getRockerValue(joystickbit.rockerType.X))
})
let Player = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(200)
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        Player.change(LedSpriteProperty.X, 1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        Player.change(LedSpriteProperty.X, -1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        Player.change(LedSpriteProperty.Y, 1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        Player.change(LedSpriteProperty.Y, -1)
    }
})
