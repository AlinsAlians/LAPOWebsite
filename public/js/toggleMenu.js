let toggle = document.querySelector('.checkbtn')
let checkbx  = document.querySelector('#check')
// let navbarUl = document.querySelector('navbar_ul')
let navbar = document.querySelector('#nav ul')
let nav = document.querySelector('#nav')

//toggle navbar on mobile view
function toggleMenu(){
    // let isActive = nav.classList.contains('navbar_ul')
    if(checkbx.checked == false){
        nav.classList.add('navbarUl')
    }else{
        nav.classList.remove('navbarUl')
    }
}

toggle.addEventListener('click', toggleMenu)


// let myMediaquerry = window.matchMedia('(max-width: 860px)')


// myMediaquerry.addEventListener('change', responsive)
// function responsive(){
//     if(myMediaquerry.matches){
//        toggle.addEventListener('click', ()=>{
//         if(checkbx.checked!==true){
//             navbar.style.display = 'flex'
//             navbarUl.style.position = 'relative'
//             navbarUl.style.display = 'flex';
//             navbarUl.style.flexDirection = 'column'
//             navbarUl.style.left = '0'
//             console.log('checked')
//         }else{
//             navbarUl.style.position = 'absolute'
//             navbarUl.style.left = '-150%'
//             console.log('not checked')
//         }
//        }) 
//     }
// }


// function toggleMenu(){
//     if(checkbx.checked!==true){
//         navbar.style.display = 'flex'
//         navbarUl.style.position = 'relative'
//         navbarUl.style.display = 'flex';
//         navbarUl.style.flexDirection = 'column'
//         navbarUl.style.left = '0'
//         console.log('checked')
//     }else{
//         navbarUl.style.position = 'absolute'
//         navbarUl.style.left = '-150%'
//         console.log('not checked')
//     }
// }





