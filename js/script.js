let countDownDate = new Date("May 18, 2021 18:03:25").getTime();
let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML ="| " + days + " days      | " + hours + " hours      |  "
        + minutes + " minutes      | " + seconds + " seconds      | ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Sale expired";
    }
}, 1000);


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
(function() {
    'use strict';

    let goTopBtn = document.querySelector('.back_to_top');

    let anim1 = document.querySelector('.second__body-trip-1');

    let anim2 = document.querySelector('.second__body-trip-2');

    let anim3 = document.querySelector('.second__body-trip-3');

    let second1 = document.querySelector('.third__region-card-1');

    let second2 = document.querySelector('.third__region-card-2');

    let second3 = document.querySelector('.third__region-card-3');

    let second4 = document.querySelector('.third__region-card-4');

    let second5 = document.querySelector('.third__region-card-5');

    let second6 = document.querySelector('.third__region-card-6');

    let name1 = document.querySelector('.fifth__text');

    let name2 = document.querySelector('.fifth__title');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;

        if ( scrolled > 100){
            anim1.classList.add('second__body-trip-1_active');
            anim2.classList.add('second__body-trip-2_active');
            anim3.classList.add('second__body-trip-3_active');
        }

        if ( scrolled > 600 ) {
            goTopBtn.classList.add('back_to_top-show');
            second1.classList.add('third__region-card-1_active');
            second2.classList.add('third__region-card-2_active');
        }
        if ( scrolled > 800 ) {
            second3.classList.add('third__region-card-3_active');
            second4.classList.add('third__region-card-4_active');
        }
        if ( scrolled > 1100 ) {
            second5.classList.add('third__region-card-5_active');
            second6.classList.add('third__region-card-6_active');
        }
        if ( scrolled > 2000 ) {
            name1.classList.add('fifth__text_active');
            name2.classList.add('fifth__title_active');
        }


        if (scrolled < 500) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
})();

x
