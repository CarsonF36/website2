rules = document.getElementById('rules-btn')
hiderules = document.getElementById('close-btn')
toggle = document.querySelector('.rules')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

// Creare Ball Properties
ball = {
    x: canvas.width / 2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4;
    dy: -4;
}

//Draw Ball on Canvas
function drawBall() {
    ctx.beginPath()
}


// Rules open and close event handlers
rules.addEventListener('click', () => {
    toggle.classList.add('show')
})

hiderules.addEventListener('click', () => {
    toggle.classList.remove('show')
})