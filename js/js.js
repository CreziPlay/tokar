
const btnNext = document.querySelector('.btn-header');
const btnNextImg = document.querySelector('.btn-header-img');
const slideBlock = document.querySelector('.heder-yslugi');
const header = document.querySelector('.header');
const backgroundImg = document.querySelector('.blur');

const tokarImg = document.querySelector('.tokar-img');
const tokarBlock = document.getElementById('tokar');

const frezImg = document.querySelector('.frez-img');
const frezBlock = document.getElementById('frez');

const metalobrImg = document.querySelector('.metalobr-img');
const metalBlock = document.getElementById('metal');


let count = 0;

btnNext.addEventListener('click',function(){
    if(count == 0){
        console.log('fff')
        slideBlock.style.transform = "translateX(-52%)";
        btnNextImg.style.transform = "rotate(180deg)";
    
        count = 1;

    }else{
        slideBlock.style.transform = "translateX(52.5%)";
        count = 0;
        btnNextImg.style.transform = "rotate(0deg)";
    }
})


document.addEventListener("DOMContentLoaded", function () {
    console.log(`${header.offsetHeight}px`)

let h =`${header.offsetHeight}px`;
backgroundImg.style.height  = `${header.offsetHeight}px`;
let hTokar = (tokarBlock.offsetHeight * 0.20) + tokarBlock.offsetHeight;
tokarImg.style.height  = `${hTokar}px`;
console.log(hTokar)

let hFrez = (frezBlock.offsetHeight * 0.30) + frezBlock.offsetHeight;
frezImg.style.height  = `${hFrez}px`;

let hmetl = (metalBlock.offsetHeight * 0.25) + metalBlock.offsetHeight;
metalobrImg.style.height  = `${hmetl}px`;

backgroundImg.style.height  = `${h}px`;



});
document.addEventListener("resize", (event) => {
    let h =`${header.offsetHeight}px`;
    backgroundImg.style.height  = `${header.offsetHeight}px`;

    let hTokar = (tokarBlock.offsetHeight * 0.25) + tokarBlock.offsetHeight;
    tokarImg.style.height  = `${hTokar}px`;
   
    let hFrez = (frezBlock.offsetHeight * 0.30) + frezBlock.offsetHeight;
    frezImg.style.height  = `${hFrez}px`;

    let hmetl = (metalBlock.offsetHeight * 0.25) + metalBlock.offsetHeight;
        metalobrImg.style.height  = `${hmetl}px`;

});


window.addEventListener('resize', function() {
      let slideBlockH = `${slideBlock.offsetHeight/2}px`;
    let myFunc= ()=>{
        btnNext.style.top = slideBlockH;
        let h =`${header.offsetHeight}px`;
        backgroundImg.style.height  = `${header.offsetHeight}px`;

        let hTokar = (tokarBlock.offsetHeight * 0.25) + tokarBlock.offsetHeight;
        tokarImg.style.height  = `${hTokar}px`;

        let hFrez = (frezBlock.offsetHeight * 0.30) + frezBlock.offsetHeight;
        frezImg.style.height  = `${hFrez}px`;

        let hmetl = (metalBlock.offsetHeight * 0.25) + metalBlock.offsetHeight;
        metalobrImg.style.height  = `${hmetl}px`;
     }
    window.setTimeout(myFunc, 300);    
})