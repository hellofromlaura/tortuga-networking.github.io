

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Show Right")
            entry.target.classList.add('showRight')
        } else {
            entry.target.classList.remove('showRight')
        }
    })
})

const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
hiddenElementsRight.forEach((el) => observerRight.observe(el))

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Show Left")
            entry.target.classList.add('showLeft')
        } else {
            entry.target.classList.remove('showLeft')
        }
    })
})

const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft')
hiddenElementsLeft.forEach((el) => observerLeft.observe(el))



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("Show")
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

