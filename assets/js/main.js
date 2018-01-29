$( document ).ready(function() {
    checkAnimation();

    var didScroll;
    var lastScrollTop = 0;
    var delta = 2;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            checkAnimation();
            didScroll = false;
        }
    }, 250);

    function isElementVisible(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top + 300;
        return (elemTop <= docViewBottom);
    }
    
    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem = $('.skills');
    
        // If the animation has already been started
        if ($elem.hasClass('start')) {
            return;
        }
        else {
            if (isElementVisible($elem)) {
                $elem.addClass('start');
                jQuery('.skillbar').each(function(){
                    jQuery(this).find('.skillbar-bar').animate({
                        width:jQuery(this).attr('data-percent')
                    },2000);
                });
            }
        }
    }
    
    $(".typedcon1").one("mouseenter", function(e){
        $(".typed1").typed({
            strings: ['A simple classifieds website written in PHP.']
        });
    })

    $(".typedcon2").one("mouseenter", function(e){
        $(".typed2").typed({
            strings: ['A simple e-commerce website written in JavaScript.']
        });
    })

    $(".typedcon3").one("mouseenter", function(e){
        $(".typed3").typed({
            strings: ['A web application to find study groups, written in JavaScript.']
        });
    })

    $("#year").text(getCurrentYear());
    $("#age").text(getAge(1996, 0, 24));

    $("#nav-about").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('about'), 800);
    });

    $("#nav-education").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('education'), 800);
    });

    $("#nav-experience").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('experience'), 800);
    });

    $("#nav-skillset").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('skills'), 800);
    });

    $("#nav-projects").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('projects'), 800);
    });

    $("#nav-contact").click(function(e) {
        e.preventDefault();
        $(window).scrollTo(document.getElementById('contact'), 800);
    });

    var cssRule1 =
        "color: #034f84;" +
        "font-size: 60px;" +
        "font-weight: bold;" +
        "text-shadow: 1px 1px 5px #034f84;" +
        "filter: dropshadow(color=#034f84, offx=1, offy=1);";
    console.log("%cHello Again.", cssRule1);

    var cssRule2 =
        "font-size: 20px;" +
        "font-weight: bold;"
    console.log("%cI see you like looking under the hood, consider sending me a message or giving me credits for any website idea you may take.", cssRule2)
});

function getAge(year, month, date) {
    var birthday = new Date(year, month, date);
    var diff = Math.abs(Date.now() - birthday.getTime());

    var age = (new Date(diff)).getUTCFullYear() - 1970;
    return age;
}

function getCurrentYear() {
    var year = (new Date()).getUTCFullYear();
    return year;
}