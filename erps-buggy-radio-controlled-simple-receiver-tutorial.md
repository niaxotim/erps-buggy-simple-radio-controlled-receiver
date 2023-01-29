### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Motorised Buggy - Simple Receiver

## Introduction
### Introduction Step @unplugged
We need to make our buggy respond to remote control commands to move, instead of pressing buttons on the buggy itself.  

This tutorial goes with the simple tutorial on sending commands from the game controller.  

![Motorised Buggy](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-receiver/master/assets/buggy_controller.png)

## Putting our buggy together!
### Assembling the pieces @unplugged
Before we start, make sure your buggy has been assembled. There are lots of sensors we *can* connect, but for now, just make
sure that the tyres are on the wheels, and that the wheels are connected to the motors.  
    
Oh, and don't forget some AA batteries too!

![Buggy Key Features](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-receiver/master/assets/features.png)


## Setting up our radio
### Step 1
First, we have to set which channel we want to use to receive on.  Make sure this matches the same channel as you've used for
your controller!    

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel assigned to you!  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

## Receiving commands
### Step 2
We want to always be listening on our radio channel for commands being sent by our controller.  

Our controller is sending key:value pairs, so we need to use a ``||radio:on radio received name value||`` block.  

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
})
```

### Step 3
Like in our controller code, we need to check which command our radio has received, and perform the right action
as a result.

Let's use an ``||logic:if-else||`` block inside our radio block. We receive 3 possible commands: "forwards", "back", or "Stop",
so we need to click the '+' to add another 'else-if' part to our block.

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
    if (true) {
    } else if (false) {
    } else {
    }
})
```

### Step 4
In the first part of our 'if' statement, we can check for the key "forwards". First, drag a
``||logic:"" = ""||`` block in to our if-statement check. Then drag the "name" variable in to left-hand-side,
and type "forwards" in to the right-hand side.

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
    } else if (false) {
    } else {
    }
})
```

### Step 5
Finally, we need to tell our buggy what to do when it receives this command!  

Drag a ``||Kitronik_Move_Motor:move Forward at speed 0||`` block in to the if-statement,
and replace the '0' with our variable "value".  

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (false) {
    } else {
    }
})
```

### Step 6
Can you put in the code for when we receive the string "back" from our controller? Then
use the correct block to move the buggy in reverse?

Check out the hint if you get stuck!  

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (name == "back") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
    } else {
    }
})
```

### Step 7
Finally, we need to tell our buggy to stop if anything else is received, otherwise
it will keep moving, even if we stop pressing buttons on our controller!  

In the final 'else' part of our conditional statement, put a ``||Kitronik_Move_Motor:stop||`` block.

#### ~ tutorialhint
```blocks
radio.onReceivedValue(function (name, value) {
    if (name == "forwards") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (name == "back") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
    } else {
        Kitronik_Move_Motor.stop()
    }
})
```

### Step 6
Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  

Put your micro:bit in to your buggy, and make sure it's switched on!  

Make sure your controller code is flashed and running, then give your controller buttons a press!  

Does your buggy move backwards and forwards as expected? Does it stop too, when you release the buttons?

### Barrier Basic Tutorial Complete @unplugged
Great work! You should now have a fully remote-controlled buggy! Woohoo! We can go forwards and backwards... which is a great start!

![Great job](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-receiver/master/assets/great_job.png)
