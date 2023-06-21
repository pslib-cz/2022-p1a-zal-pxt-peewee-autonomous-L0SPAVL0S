let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
radio.setGroup(25)
let ls = 50
let rs = 50

let smer = "0"

let auto = true
let white = 0

const pinC = DigitalPin.P15
const pinL = DigitalPin.P14
const pinR = DigitalPin.P13

pins.setPull(pinC, PinPullMode.PullNone)

basic.forever(function () {

    if (auto) {
        let c = (white ^ pins.digitalReadPin(pinC)) == 0 ? true : false
        let l = (white ^ pins.digitalReadPin(pinL)) == 0 ? true : false
        let r = (white ^ pins.digitalReadPin(pinR)) == 0 ? true : false
        radio.onReceivedString(function (receivedString) {
            if (receivedString == "r") {
                smer = "r";  // Replace "Your Replacement String" with your desired replacement
                basic.showNumber(0, 0)
            }
            if (receivedString == "s") {
                smer = "s";  // Replace "Your Replacement String" with your desired replacement
                basic.showNumber(0, 0)
            }
            if (receivedString == "l") {
                smer = "l";  // Replace "Your Replacement String" with your desired replacement
                basic.showNumber(0, 0)
            }
            // basic.showString(receivedString);
        })

        if (!r && !l && smer == "r") {
            basic.showIcon(IconNames.Duck, 0)
            ls = -105
            rs = -105
            PCAmotor.MotorRun(m1, ls)
            PCAmotor.MotorRun(m4, -rs)
            basic.pause(600)
            do {
                let r = (white ^ pins.digitalReadPin(pinR)) == 0 ? true : false

            } while (r)
            // basic.pause(400)
            basic.clearScreen()
            smer = "0"
        }
        if (!r && !l && smer == "l") {
            basic.showIcon(IconNames.Duck, 0)
            ls = 105
            rs = 115
            basic.pause(100)
            PCAmotor.MotorRun(m1, ls)
            PCAmotor.MotorRun(m4, -rs)
            basic.pause(600)
            do {
                let r = (white ^ pins.digitalReadPin(pinR)) == 0 ? true : false

            } while (r)
            // basic.pause(400)
            basic.clearScreen()
            smer = "0"
        }
        if (!r && !l && smer == "s") {
            basic.showIcon(IconNames.Duck, 0)
            rs = 115
            ls = -115
            PCAmotor.MotorRun(m1, -ls)
            PCAmotor.MotorRun(m4, -rs)
            basic.pause(500)
            basic.clearScreen()
            smer = "0"
        }
        

        if (r) { rs = 115 }
        else {
            rs = 0
            // basic.pause(100)
        }

        if (l) ls = -115
        else {
            ls = 0
            // basic.pause(100)
        }
        // if(c) {
        //     ls = 115
        //     rs = 115
        // }
        PCAmotor.MotorRun(m1, ls)
        PCAmotor.MotorRun(m4, -rs)










    }

})

// radio.setGroup(25)
// input.onButtonPressed(Button.A, function () {
//     radio.sendString("l")
//     basic.showArrow(ArrowNames.West)
// })
// input.onButtonPressed(Button.B, function () {
//     radio.sendString("r")
//     basic.showArrow(ArrowNames.East)
// })
// input.onButtonPressed(Button.AB, function () {
//     radio.sendString("s")
//     basic.showArrow(ArrowNames.North)
// })
