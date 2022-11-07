input.onButtonPressed(Button.A, function () {
    Letter += -1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Letter += 1
})
input.onGesture(Gesture.Shake, function () {
    FINISHED_MESSAGE = "" + Message[0] + Message[1] + Message[2] + Message[3] + Message[4] + Message[5] + Message[6] + Message[7] + Message[8] + Message[9] + Message[10] + Message[11] + Message[12] + Message[13] + Message[14]
    basic.showString(FINISHED_MESSAGE)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString(FINISHED_MESSAGE)
    }
})
let Message: string[] = []
let FINISHED_MESSAGE = ""
radio.setGroup(1)
let Letter = 1
basic.forever(function () {
    if (Letter == 1) {
        basic.showString("A")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("A")
        }
    } else if (Letter == 2) {
        basic.showString("B")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("B")
        }
    } else if (Letter == 3) {
        basic.showString("C")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("C")
        }
    } else if (Letter == 4) {
        basic.showString("D")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("D")
        }
    } else if (Letter == 5) {
        basic.showString("E")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("E")
        }
    } else if (Letter == 6) {
        basic.showString("F")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("F")
        }
    } else if (Letter == 7) {
        basic.showString("G")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("G")
        }
    } else if (Letter == 8) {
        basic.showString("H")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("H")
        }
    } else if (Letter == 9) {
        basic.showString("I")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("I")
        }
    } else if (Letter == 10) {
        basic.showString("J")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("J")
        }
    } else if (Letter == 11) {
        basic.showString("K")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("K")
        }
    } else if (Letter == 12) {
        basic.showString("L")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("L")
        }
    } else if (Letter == 13) {
        basic.showString("M")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("M")
        }
    } else if (Letter == 14) {
        basic.showString("N")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("N")
        }
    } else if (Letter == 15) {
        basic.showString("O")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("O")
        }
    } else if (Letter == 16) {
        basic.showString("P")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("P")
        }
    } else if (Letter == 17) {
        basic.showString("Q")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("Q")
        }
    } else if (Letter == 18) {
        basic.showString("R")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("R")
        }
    } else if (Letter == 19) {
        basic.showString("S")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("S")
        }
    } else if (Letter == 20) {
        basic.showString("T")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("T")
        }
    } else if (Letter == 21) {
        basic.showString("U")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("U")
        }
    } else if (Letter == 22) {
        basic.showString("V")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("V")
        }
    } else if (Letter == 23) {
        basic.showString("W")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("W")
        }
    } else if (Letter == 24) {
        basic.showString("X")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("X")
        }
    } else if (Letter == 25) {
        basic.showString("Y")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("Y")
        }
    } else if (Letter == 26) {
        basic.showString("Z")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("Z")
        }
    } else if (Letter == 27) {
        basic.showString(",")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push(",")
        }
    } else if (Letter == 28) {
        basic.showString(".")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push(".")
        }
    } else if (Letter == 29) {
        basic.showString("!")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("!")
        }
    } else if (Letter == 30) {
        basic.showString("?")
        if (input.buttonIsPressed(Button.AB)) {
            Message.push("?")
        }
    }
})
