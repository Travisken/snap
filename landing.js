let dropSvgOne= document.querySelector('.more-one');
let dropSvgTwo= document.querySelector('.more-two');
let dropContent= document.querySelector('#dropOne');
let dropContentTwo= document.querySelector('#dropTwo');
let dropContentThree= document.querySelector('#dropThree');
let dropContentFour= document.querySelector('#dropFour');
let sideBar= document.querySelector('.sidebar-total');
let burger= document.querySelector('.hamburger');

function clickOn(){
    sideBar.classList.toggle('show');

    // if(sideBar.style.width = '100%'){
        // document.querySelector('.sp1').style.rotate='45deg'
    //     document.querySelector('.sp2').style.rotate='-45deg'
    //     document.querySelector('.sp3').style.rotate='-45deg'
    //     document.querySelector('.sp4').style.rotate='45deg'
    //     document.querySelector('.sp5').style.border='none'
    //     document.querySelector('.sp6').style.border='none'
    //    console.log('functioning')
    //    sideBar.classList.toggle('show')
       
    // }else{
    //     sideBar.classList.toggle('show');
    //     console.log('working')
    // }
}

function mouseOver(){
    dropSvgOne.classList.toggle('svg');
if (dropContent.style.height === '0px') {
    dropContent.style.height = '200px'
} else {
    dropContent.style.height = '0px'
}
if (dropContentThree.style.height === '0px') {
    dropContentThree.style.height = '200px'
} else {
    dropContentThree.style.height = '0px'
}


if (dropContent.style.height === '200px') {
    dropContentTwo.style.height = '0px'
}




//     if(document.querySelector('.more-one').style="transform"){

// console.log('working')
//     }
    // dropContent.classList.toggle('display');
}

function clickMe(){
    if (dropContentTwo.style.height === '0px') {
        dropContentTwo.style.height = '120px'
    } else {
        dropContentTwo.style.height = '0px'
    }


    if (dropContentTwo.style.height === '120px') {
        dropContent.style.height = '0px'
    } 
    if (dropContentFour.style.height === '0px') {
        dropContentFour.style.height = '120px'
    } else {
        dropContentFour.style.height = '0px'
    }


    if (dropContentTwo.style.height === '120px') {
        dropContent.style.height = '0px'
    } 


    dropSvgTwo.classList.toggle('svg');
}

