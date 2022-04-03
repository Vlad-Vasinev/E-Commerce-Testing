
$('.slider__wrapper').slick({
    dots: false,
    slidesToShow: 4,
    prevArrow: ('.slider__btn-prev'),
    nextArrow: ('.slider__btn-next'),
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});


let headerBtn = document.querySelector('.header__btn');
let headerCurtain = document.querySelector('.header__curtain');

headerBtn.addEventListener('click', () => {
    headerCurtain.classList.toggle('header__curtain--active');
});


let howweworkBtn = document.querySelectorAll('.howwework__item-btn');
let howweworkDescription = document.querySelectorAll('.howwework__item-description');

for (let i = 0; i < howweworkBtn.length; i++) {
    howweworkBtn[i].addEventListener('click', (Event) => {
        howweworkBtn[i].classList.toggle('btn--active');
        howweworkDescription[i].classList.toggle('howwework__item-description--active');
        if(howweworkBtn[i].classList.contains('btn--active')){
            howweworkBtn[i].innerHTML = '<img src = "/images/howwework-item-icon-upsidedown.png" alt = "icon upsidedown">'
        }
        else{
            howweworkBtn[i].innerHTML = '<img src = "/images/howwework-item-icon.png" alt = "icon">'
        }
    })
}


let benefitsItemHuge = document.querySelectorAll('.benefits__item-huge');
let controlBtn = document.querySelectorAll('.control-btns__btn');

for (let i = 0; i < controlBtn.length; i++) {
    controlBtn[i].addEventListener('click', (Event) => {
        for (let i = 0; i < controlBtn.length; i++) {
            benefitsItemHuge[i].style.display = 'none';
        }
        benefitsItemHuge[i].style.display = 'flex';
    })
}