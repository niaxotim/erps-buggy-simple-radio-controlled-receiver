radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (name == "back") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
    } else {
        Kitronik_Move_Motor.stop()
    }
})
radio.setGroup(255)
