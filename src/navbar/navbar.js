(function () {
    var previousScroll = 0;
    var navbar = document.getElementById('navbar');
    var navClasses = navbar.classList;

    window.addEventListener('scroll', function(e) {
        var currentScroll = window.scrollY;
        var isDown = currentScroll > previousScroll;
        if ( isDown && !navClasses.contains('scrolled') ) {
            navClasses.add('scrolled');
        } else if ( !isDown ) {
            navClasses.remove('scrolled');
        }

        previousScroll = currentScroll;
    });
}());