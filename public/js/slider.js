// const sliderItems = document.querySelectorAll('.image-slider img')
// const sliderBtns = document.querySelectorAll('.btn-slider')
// const sliderDots = document.querySelectorAll('.dot1')
// const sliderDotsCheckbx = document.querySelectorAll('label input[type="radio"]')
// // console.log(sliderDots)
// // console.log(sliderDotsCheckbx)

// // console.log(sliderBtns, sliderItems)



// let count = 0;
// let countTwo = 0;
// let isPaused = false;

// function moveLeft(){
//     if(count<=0){
//         count = count-1;
//     }
//     if(count == 0-sliderItems.length){
//         count = 0;
//     }
//     for(i=0; i<sliderItems.length; i++){
//         sliderItems[i].style.transform = `translateX(${count*100}%)`
//     }
//     console.log(sliderItems[count])
// }


// function moveRight(){
//     if(count>=0){
//         count  = 0-sliderItems.length
//     }
//     if(count<0){
//         count = count+1;
//     }
//     for(i=0; i<sliderItems.length; i++){
//         sliderItems[i].style.transform = `translateX(${count*100}%)`
//     }
//     console.log(sliderItems[count])
// }



// mysSliderInterval = setInterval(function() {
//     if(!isPaused){
//         moveRight()
//         console.log("executed")
//     }
    
// }, 2000)


// sliderBtns[1].addEventListener('click', moveRight)
// sliderBtns[0].addEventListener('click', moveLeft)