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


$('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__inner').removeClass('catalog__inner_active').eq($(this).index()).addClass('catalog__inner_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
            $('.catalog-item__more').eq(i).toggleClass('catalog-item__more_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');