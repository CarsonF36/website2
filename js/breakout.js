rules = document.querySelectorAll('.panel')

rules.forEach(panel => {
    rules.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('show')
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        rules.classList.remove('show')
    })
}