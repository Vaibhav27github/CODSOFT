document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginForm = document.querySelector('.login-form');
    const navbar = document.querySelector('.navbar');

    const searchBtn = document.querySelector('#search-btn');
    const cartBtn = document.querySelector('#cart-btn');
    const loginBtn = document.querySelector('#login-btn');
    const menuBtn = document.querySelector('#menu-btn');

    const closeAll = () => {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    };

    if (searchBtn) {
        searchBtn.onclick = () => {
            if (!searchForm.classList.contains('active')) {
                closeAll();
                searchForm.classList.add('active');
            } else {
                searchForm.classList.remove('active');
            }
        };
    }

    if (cartBtn) {
        cartBtn.onclick = () => {
            if (!shoppingCart.classList.contains('active')) {
                closeAll();
                shoppingCart.classList.add('active');
            } else {
                shoppingCart.classList.remove('active');
            }
        };
    }

    if (loginBtn) {
        loginBtn.onclick = () => {
            if (!loginForm.classList.contains('active')) {
                closeAll();
                loginForm.classList.add('active');
            } else {
                loginForm.classList.remove('active');
            }
        };
    }

    if (menuBtn) {
        menuBtn.onclick = () => {
            if (!navbar.classList.contains('active')) {
                closeAll();
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active');
            }
        };
    }

    window.onscroll = () => {
        closeAll();
    };
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });