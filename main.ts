let rotation = 0
let arrow = 0

basic.forever(function () {
    led.plot(2, 2)
    led.plot(0, 2)
    led.plot(4, 2)
    led.plot(2, 4)
    led.plot(2, 0)
    pins.servoWritePin(AnalogPin.P0, rotation)
    
    buttonPress();

    if (arrow == 3) {
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(2, 1)
        led.plot(1, 1)
        led.plot(3, 1)
    }
    if (arrow == 2) {
        led.plot(1, 2)
        led.plot(0, 2)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 1)
    }
    if (arrow == 1) {
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(2, 1)
        led.plot(1, 3)
        led.plot(3, 3)
    }
    if (arrow == 0) {
        led.plot(1, 2)
        led.plot(0, 2)
        led.plot(3, 2)
        led.plot(1, 1)
        led.plot(1, 3)
    }
})

function buttonPress(){
    if (input.buttonIsPressed(Button.B)) {
        rotation += 90
        if (arrow < 3) {
            arrow++
        } else {
            arrow = 0
        }
        basic.clearScreen()
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.A)) {
        rotation -= 90
        if (arrow > 0) {
            arrow--
        } else {
            arrow = 3
        }
        basic.clearScreen()
        pause(200)
    }
}