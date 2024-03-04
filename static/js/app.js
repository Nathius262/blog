let navToggleEl = document.querySelector('.nav-toggle')
let navMenuList = document.querySelector('.collaspe-menu')

navToggleEl.addEventListener('click', ()=>{
    //console.log('menu btn clicked')
    //navMenuList.style.visibility = 'visible'
    
    navMenuList.classList.toggle('visible')
})