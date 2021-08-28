$(function () {
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    const changeNavBehaviour = function() {
        const nav = $('nav');
        
        if ($(window).width() < 768) {
            nav.addClass('bg-dark');
            return;
        }
    
        nav.removeClass('bg-dark');
        nav.css('background-color', ($(window).scrollTop() > 60) ? 'black' : 'transparent');
    };

    changeNavBehaviour();

    $(window).scroll(function() {
        changeNavBehaviour();
        
        $('#top-button').css({
            'opacity': ($(window).scrollTop() > 60) ? '1' : '0',
            'z-index': ($(window).scrollTop() > 60) ? '1030' : '-1030'
        });
    });

    $('form').submit(function(e) {
        e.preventDefault();
    
        const name = $('form #name').val();
        const email = $('form #email').val();
        const message = $('form #message').val();

        const subject = `A message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A %0D%0A${message}`;

        window.location.replace(`mailto:cybercoder.nishant@gmail.com?subject=${subject}&body=${body}`)
        e.currentTarget.submit();
    });

    $('.project-card button').click(function() {
        window.location.href = $(this).data('url');
    })
});