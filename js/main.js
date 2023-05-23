// video
if (document.querySelector('video')) {
    // const player = new Plyr('#player');
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', {
            controls
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}

$(document).ready(function () {
    if ($('.welcomescreen__parallax').length > 0) {
        // parallax
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        var scene = document.getElementById('scene1');
        var parallaxInstance = new Parallax(scene1);
    }

    // slider - promotion

    $('.promotionslider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.testimonialsslider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    // payment sect - padding left
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)

    $('.payment__leftsect').css('padding-left', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)

        $('.payment__leftsect').css('padding-left', paddingContainer);
    });

    // burger
    (function () {
        var burger1, burger2, burger3;


        burger2 = document.querySelector(".burger2");



        burger2.addEventListener("click", function () {
            return burger2.classList.toggle("on");
        });


    }).call(this);

    $('.burger').click(function () {
        $('.mobsect').toggleClass('show');
    });

    // subnenu slide
    $(window).on('resize', function () {
        if ($(window).width() < 992) {
            submenuSlide();
        } else {
            $('.menu-item-has-children').children('a').off('click');
            $('.sub-menu').slideDown();
        }
    });

    if ($(window).width() < 992) {
        submenuSlide();
    }

    function submenuSlide() {
        $('.menu-item-has-children').children('a').off('click').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.menu-item-has-children').children('.sub-menu').slideToggle();
        });
    }


    // service slider ----------------- //
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        autoplay: true,
    });

    // accordion ----------------------- //
    $('.accordion__head').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.accordion__body').slideToggle();
    });

    if ($(window).width() < 992) {
        $('.sub-menu .menu-item-has-children').click(function () {
            $(this).toggleClass('open');
        })
        $('.menu-item-has-children.mainmenu a').click(function () {
            $(this).parent().toggleClass('openm');
        })


        
    }





});