const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showRight')
        } else {
            entry.target.classList.remove('showRight')
        }
    })
})
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('showLeft')
        } else {
            entry.target.classList.remove('showLeft')
        }
    })
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft')
const hiddenElements = document.querySelectorAll('.hidden')

hiddenElementsLeft.forEach((el) => observerLeft.observe(el))
hiddenElements.forEach((el) => observer.observe(el))
hiddenElementsRight.forEach((el) => observerRight.observe(el))