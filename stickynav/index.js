const nav = document.querySelector('.navigation')
const navTop = nav.offsetTop

function fixNav(){
    
    //console.log(window.scrollY, navTop)

    if(navTop <= window.scrollY){
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fix-nav')
    } else {
        document.body.classList.remove('fix-nav')
        document.body.style.paddingTop = 0
    }
 }

window.addEventListener('scroll', fixNav)