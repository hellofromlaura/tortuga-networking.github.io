const detectBrowser = (() => { 
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edg") > -1) {
        console.log("Microsoft Edge")
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        console.log("Chrome")
        return "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        console.log("Firefox")
        return "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        console.log("Safari")
        return "Safari";
    } else if (userAgent.indexOf("Opera") > -1) {
        console.log("Opera")
        return "Opera";
    } else if (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1) {
        console.log("Internet Explorer")
        return "Internet Explorer";
    }

    return "Unknown";
})



const isAnimated = (() => {
    const hiddenElementsRight = document.querySelectorAll('.hiddenRight')
    const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft')
    const hiddenElements = document.querySelectorAll('.hidden')
    const browser = detectBrowser();
    if (browser === "Safari")  {
        hiddenElementsRight.forEach((el) => el.classList.add('showRight')) 
        hiddenElementsLeft.forEach((el) => el.classList.add('showLeft'))
        hiddenElements.forEach((el) => el.classList.add('show'))
    } else {
        hiddenElementsRight.forEach((el) => {
            observerRight.observe(el)
        } )
        hiddenElementsLeft.forEach((el) => observerLeft.observe(el))
        hiddenElements.forEach((el) => observer.observe(el))
    }
})



const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showRight')
        } else {
            entry.target.classList.remove('showRight')
        }
    })
})
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showLeft')
        } else {
            entry.target.classList.remove('showLeft')
        }
    })
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


isAnimated()


