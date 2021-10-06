const sliders = document.querySelector('.anim')

options = { }

const fadeOnShow = new IntersectionObserver (function (entries,fadeOnShow) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return 
        } else (entry.target.classList.add('appear'))
        fadeOnShow.unobserve(entry.target)
    })
},options)

sliders.forEach(slider => {
    fadeOnShow.observe(slider)
})