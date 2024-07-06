
    window.onscroll = function() {
        var navbarH2 = document.querySelector('#navbar h2');
        if (window.scrollY > 0) {
            navbarH2.style.color = 'white';
        } else {
            navbarH2.style.color = 'blue';
        }
    };
