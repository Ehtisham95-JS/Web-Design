let header = document.querySelector('.headr');

let heightOfHeader = header.scrollHeight;

window.addEventListener('scroll', () => {
    let elem = window.scrollY;
    if(elem > heightOfHeader) {
        header.style.backgroundColor = '#212047';
    }
    else {
        header.style.backgroundColor = 'transparent'
    }
})


const leftBtn = document.querySelector('.left');
const serviceOne = document.querySelector('.service.one');
const serviceTwo = document.querySelector('.service.two');
const services = document.querySelector('.services');
console.log(serviceOne);

leftBtn.addEventListener('click', () => {
    // serviceOne.style.display = 'block';
    // serviceTwo.style.display = 'none';
    
})