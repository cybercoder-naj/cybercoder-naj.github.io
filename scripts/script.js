const changeNavBehaviour = () => {
    const nav = document.querySelector('nav');

    if (window.innerWidth < 768) {
        nav.classList.add('bg-dark');
        return;
    }

    nav.classList.remove('bg-dark');
    if (window.scrollY > 60)
        nav.style.backgroundColor = 'black';
    else
        nav.style.backgroundColor = 'transparent';
};

$(function () {
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    changeNavBehaviour();
});

const buttonToTop = () => {
    const button = document.getElementById('top-button')
    button.style.opacity = (window.scrollY > 60) ? '1' : '0';
    button.style.zIndex = (window.scrollY > 60) ? '1030' : '-1030';
}

$(window).scroll(function() {
    changeNavBehaviour();
    buttonToTop();
});