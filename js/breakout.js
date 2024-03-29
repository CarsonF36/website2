rules = document.getElementById('rules-btn')
hiderules = document.getElementById('close-btn')
toggle = document.querySelector('.rules')
score = 0
brickRowCount = 9
brickColumnCount = 5

// Rules open and close event handlers
rules.addEventListener('click', () => {
    toggle.classList.add('show')
})

hiderules.addEventListener('click', () => {
    toggle.classList.remove('show')
})


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}


// Draw ball on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI * 2)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}


//Create Brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

// Create Bricks
bricks = []
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] = {x, y, ...brickInfo}
    }
}

// Create paddle properties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}



// Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x,paddle.y,paddle.w,paddle.h)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}


// Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}

//Draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill()
            ctx.closePath()
        })
    })
}

// Draw everything
function draw() {
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

draw()