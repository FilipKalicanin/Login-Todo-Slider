let btnPrev = document.getElementById('btn-galleryPrev'); // dugme Prikazi sledecu sliku
let btnNext = document.getElementById('btn-galleryNext'); // dugme Prikazi prethodnu sliku
let photo = document.getElementById('galleryPhoto'); // prikaz slike iz objekta
let totalLikes = document.getElementById('totalLikes'); // prikaz broja lajkova na slici


let btnLike = document.getElementById('btnLike'); // dugme povecaj total likes na slici
let btnDisslike = document.getElementById('btnDisslike'); // dugme umanji total likes na slici
let btnBest = document.getElementById('btnBest'); // prikazi sliku sa najvecim total likes

let img1 = {
    src: 'img/picture1.jpg',
    likes: 0,
    id: 0
}
let img2 = {
    src: 'img/picture2.jpg',
    likes: 0,
    id: 2
}
let img3 = {
    src: 'img/picture3.jpg',
    likes: 0,
    id: 3
}
let img4 = {
    src: 'img/picture4.jpg',
    likes: 0,
    id: 4
}
let img5 = {
    src: 'img/picture5.jpg',
    likes: 0,
    id: 5
}
///////////////////////////////////////////////////////////////////////////////////////////
let arrayImg = [img1, img2 ,img3, img4, img5]; //Niz objekata

let count = 0;


// function animation(){
//     photo.classList.add('slider');
// }

// Prikazi sledecu sliku
btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    if(count < 4){
        count++;
    }else{
        count = 0;
    };
    photo.src = arrayImg[count].src;
    
    // animation();

    totalLikes.textContent = `Total likes: ${arrayImg[count].likes}`;

})
// Prikazi prethodnu sliku
btnPrev.addEventListener('click', (e) => {
    e.preventDefault();

    if(count > 0){
        count--;
    }else{
        count = 4;
    };

    photo.src = arrayImg[count].src;

    // animation();

    totalLikes.textContent = `Total likes: ${arrayImg[count].likes}`;

})
// Lajk
btnLike.addEventListener('click', (e)=>{
    e.preventDefault();
    arrayImg[count].likes++;
    totalLikes.textContent = `Total likes: ${arrayImg[count].likes}`;
})
//Dislajk
btnDisslike.addEventListener('click', (e)=>{
    e.preventDefault();
    arrayImg[count].likes--;
    totalLikes.textContent = `Total likes: ${arrayImg[count].likes}`;
})
//Slika winner
btnBest.addEventListener('click', (e)=>{
    e.preventDefault();
    winner = [];
    arrayImg.map(el => winner.push(el.likes));
    winner.sort((a,b) => b - a);
    console.log(winner);
    for(let i = 0; i < arrayImg.length; i++){
        if(arrayImg[i].likes === winner[0]){
            photo.src = arrayImg[i].src;
            totalLikes.textContent = `Total likes: ${arrayImg[i].likes}`;
            count = i;
        }
    }
})


