(function(){
    backToTop("#back-top");

    var heading = 'h2,h3,h4,h5';
    /* title anchor */
    anchors.options = {
        placement: 'left',
        icon: '⚓'
    };
    anchors.add(heading);

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
