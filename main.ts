let accX3 = 0
let eggY3 = 0
let basketX3 = 2
let eggX3 = 2
let fallingPause1 = 300
basic.forever(function () {
    led.unplot(basketX3, 4)
    led.unplot(eggX3, eggY3)
    eggY3 += 1
    led.plot(eggX3, eggY3)
    basic.pause(300)
    accX3 = input.acceleration(Dimension.X)
    basketX3 = 2 + Math.min(2, Math.max(-2, Math.idiv(accX3, 200)))
    led.plot(basketX3, 4)
    if (eggY3 > 4) {
        eggY3 = -1
        eggX3 = randint(0, 4)
    }
    if (eggY3 == 4) {
        if (basketX3 == eggX3) {
            game.addScore(1)
            if (game.score() % 5 == 0) {
                fallingPause1 = fallingPause1 - 25
            }
        } else {
            game.removeLife(1)
        }
    }
    basic.pause(fallingPause1)
})
