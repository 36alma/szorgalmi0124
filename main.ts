function _2 () {
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        basic.pause(200)
        x += 1
    }
}
function _3 () {
	
}
function ösz () {
    _1()
    _2()
    _3()
}
function _1 () {
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        basic.pause(200)
        x += 1
    }
    basic.pause(200)
    for (let index = 0; index < 5; index++) {
        x = 4
        y += 1
        basic.pause(200)
        led.plot(x, y)
    }
    for (let index = 0; index < 5; index++) {
        y = 4
        x += -1
        basic.pause(200)
        led.plot(x, y)
    }
    for (let index = 0; index < 3; index++) {
        x = 0
        y += -1
        basic.pause(200)
        led.plot(x, y)
    }
}
let x = 0
let y = 0
y = 0
x = 0
ösz()
basic.forever(function () {
	
})
