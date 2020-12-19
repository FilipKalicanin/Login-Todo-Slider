let btnPrev = document.getElementById('btn-galleryPrev');
let btnNext = document.getElementById('btn-galleryNext');

let photo = document.getElementById('galleryPhoto');

let count = 1;

btnNext.addEventListener('click', (e) => {
    
    if(count > 5){
        count = 1;
    }
    photo.src = `img/picture${count}.jpg`;
    count++

})


btnPrev.addEventListener('click', (e) => {

    if(count < 1){
        count = 5;
    }
    photo.src = `img/picture${count}.jpg`;
    count--

})
