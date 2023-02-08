$('.carousel__wrapper').slick({
    speed: 1200,
    prevArrow: '<button class="carousel__prev"><img src="icons/carousel/left_arrow.png" alt="arrow"></button>',
    nextArrow: '<button class="carousel__next"><img src="icons/carousel/right_arrow.png" alt="arrow"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
});