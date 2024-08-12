// Cek ukuran viewport dan set image src saat halaman pertama kali dimuat
if (window.innerWidth >= 360 && window.innerWidth <= 640) {
    const getImageCover = document.getElementsByClassName("img_cover_awal")[0];
    const about_mobile = document.getElementsByClassName("about_mobile")[0];
    const explore_thailan_logo = document.getElementsByClassName("explore_Thailand")[0];
    
    // Ganti dengan jalur relatif
    getImageCover.src = "image/mobile_cover1.png";
    about_mobile.src = "image/about-mobile.png";
    explore_thailan_logo.src = "image/footer_img.png";
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    simulateTouch: false,
    allowTouchMove: false,
});

const imageCoverSrcs = [
    'image/cover_awal.png',
    'image/cover_awal2.png',
    'image/cover_awal3.png'
];

const mobileImageCoverSrcs = [
    'image/mobile_cover1.png',
    'image/mobile_cover2.png',
    'image/mobile_cover3.png'
];
const slides = document.querySelectorAll('.swiper-slide');
const imageCover = document.querySelector('.img_cover_awal');

function updateImageSrcs() {
    const isMobileView = window.innerWidth >= 360 && window.innerWidth <= 640;
    const currentImageSrcs = isMobileView ? mobileImageCoverSrcs : imageCoverSrcs;

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            let active = swiper.activeIndex;

            if (index === 0 || index === 4) {
                swiper.slideTo(0);
            } else if (index > active) {
                swiper.slideNext();
            } else if (index < active) {
                swiper.slidePrev();
            }

            const newImageSrc = currentImageSrcs[index % currentImageSrcs.length];

            imageCover.style.opacity = 0;
            setTimeout(() => {
                imageCover.src = newImageSrc;
                imageCover.style.opacity = 1;
            }, 300);
        });
    });
}

// Initial check and event listener for window resize
updateImageSrcs();
window.addEventListener('resize', updateImageSrcs);

const registrasi = document.querySelector('.registrasi');
if (registrasi) {
    registrasi.addEventListener('click', () => {
        window.location.href = 'register.html';
    });
}

const upload = document.querySelector('.uploadicon');
if (upload) {
    upload.addEventListener('click', () => {
        alert('Upload icon clicked');
    });
}
const hamburger_icon = document.getElementsByClassName("hamburger_icon")[0];
const mobile_hamburger_active = document.getElementsByClassName('mobile_hamburger_active')[0]
hamburger_icon.addEventListener('click', () => {
    hamburger_icon.classList.toggle('active');
    mobile_hamburger_active.classList.toggle('active')
    
    if (hamburger_icon.classList.contains('active')) {
        hamburger_icon.innerHTML = '&#x2716';
    } else {
        hamburger_icon.innerHTML = '&#9776;';  // Kembali ke simbol hamburger (Unicode)
    }
});


