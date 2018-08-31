// tests go here; this will not be compiled when this package is used as a library
let blue = 0
let green = 0
let red = 0
let cal = false
input.onButtonPressed(Button.A, function () {
    tcs3200.calibration(
        DigitalPin.P15,
        DigitalPin.P1,
        DigitalPin.P8,
        DigitalPin.P12,
        DigitalPin.P2,
        50
    )
    cal = false
})
cal = true
basic.forever(function () {
    if (!(cal)) {
        red = tcs3200.color_choice(color.red)
        green = tcs3200.color_choice(color.green)
        blue = tcs3200.color_choice(color.blue)
        serial.writeLine("RED: " + red)
        serial.writeLine("GREEN: " + green)
        serial.writeLine("BLUE: " + blue)
        serial.writeLine("")
    }
})
