def on_button_pressed_a():
    global Letter
    Letter += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Letter
    Letter += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global FINISHED_MESSAGE
    FINISHED_MESSAGE = "" + Message[0] + Message[1] + Message[2] + Message[3] + Message[4] + Message[5] + Message[6] + Message[7] + Message[8] + Message[9] + Message[10] + Message[11] + Message[12] + Message[13] + Message[14]
    basic.show_string(FINISHED_MESSAGE)
    if input.button_is_pressed(Button.A):
        radio.send_string(FINISHED_MESSAGE)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Message: List[str] = []
FINISHED_MESSAGE = ""
radio.set_group(1)
Letter = 1

def on_forever():
    if Letter == 1:
        basic.show_string("A")
        if input.button_is_pressed(Button.AB):
            Message.append("A")
    elif Letter == 2:
        basic.show_string("B")
        if input.button_is_pressed(Button.AB):
            Message.append("B")
    elif Letter == 3:
        basic.show_string("C")
        if input.button_is_pressed(Button.AB):
            Message.append("C")
    elif Letter == 4:
        basic.show_string("D")
        if input.button_is_pressed(Button.AB):
            Message.append("D")
    elif Letter == 5:
        basic.show_string("E")
        if input.button_is_pressed(Button.AB):
            Message.append("E")
    elif Letter == 6:
        basic.show_string("F")
        if input.button_is_pressed(Button.AB):
            Message.append("F")
    elif Letter == 7:
        basic.show_string("G")
        if input.button_is_pressed(Button.AB):
            Message.append("G")
    elif Letter == 8:
        basic.show_string("H")
        if input.button_is_pressed(Button.AB):
            Message.append("H")
    elif Letter == 9:
        basic.show_string("I")
        if input.button_is_pressed(Button.AB):
            Message.append("I")
    elif Letter == 10:
        basic.show_string("J")
        if input.button_is_pressed(Button.AB):
            Message.append("J")
    elif Letter == 11:
        basic.show_string("K")
        if input.button_is_pressed(Button.AB):
            Message.append("K")
    elif Letter == 12:
        basic.show_string("L")
        if input.button_is_pressed(Button.AB):
            Message.append("L")
    elif Letter == 13:
        basic.show_string("M")
        if input.button_is_pressed(Button.AB):
            Message.append("M")
    elif Letter == 14:
        basic.show_string("N")
        if input.button_is_pressed(Button.AB):
            Message.append("N")
    elif Letter == 15:
        basic.show_string("O")
        if input.button_is_pressed(Button.AB):
            Message.append("O")
    elif Letter == 16:
        basic.show_string("P")
        if input.button_is_pressed(Button.AB):
            Message.append("P")
    elif Letter == 17:
        basic.show_string("Q")
        if input.button_is_pressed(Button.AB):
            Message.append("Q")
    elif Letter == 18:
        basic.show_string("R")
        if input.button_is_pressed(Button.AB):
            Message.append("R")
    elif Letter == 19:
        basic.show_string("S")
        if input.button_is_pressed(Button.AB):
            Message.append("S")
    elif Letter == 20:
        basic.show_string("T")
        if input.button_is_pressed(Button.AB):
            Message.append("T")
    elif Letter == 21:
        basic.show_string("U")
        if input.button_is_pressed(Button.AB):
            Message.append("U")
    elif Letter == 22:
        basic.show_string("V")
        if input.button_is_pressed(Button.AB):
            Message.append("V")
    elif Letter == 23:
        basic.show_string("W")
        if input.button_is_pressed(Button.AB):
            Message.append("W")
    elif Letter == 24:
        basic.show_string("X")
        if input.button_is_pressed(Button.AB):
            Message.append("X")
    elif Letter == 25:
        basic.show_string("Y")
        if input.button_is_pressed(Button.AB):
            Message.append("Y")
    elif Letter == 26:
        basic.show_string("Z")
        if input.button_is_pressed(Button.AB):
            Message.append("Z")
    elif Letter == 27:
        basic.show_string(",")
        if input.button_is_pressed(Button.AB):
            Message.append(",")
    elif Letter == 28:
        basic.show_string(".")
        if input.button_is_pressed(Button.AB):
            Message.append(".")
    elif Letter == 29:
        basic.show_string("!")
        if input.button_is_pressed(Button.AB):
            Message.append("!")
    elif Letter == 30:
        basic.show_string("?")
        if input.button_is_pressed(Button.AB):
            Message.append("?")
basic.forever(on_forever)
