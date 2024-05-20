document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    let isColored = false;

    toggleButton.addEventListener('click', function () {
        isColored = !isColored;
        if (isColored) {
            body.style.backgroundColor = 'chartreuse';
        } else {
            body.style.backgroundColor = 'skyblue';
        }
    });
});
