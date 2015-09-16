(function(){
    backToTop("#back-top");
    function backToTop(toTopId) {
        // hide #back-top first
        $(toTopId).hide();

        // fade in #back-top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $(toTopId).fadeIn();
            } else {
                $(toTopId).fadeOut();
            }
        });

        // scroll body to 0px on click
        $(toTopId + ' a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    } 
}());
