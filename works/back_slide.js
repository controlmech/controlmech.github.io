$("document").ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 30)
            $(".subnav").animate({marginLeft:'1.4%'},30);
        if ($(window).scrollTop() < 30)
            $(".subnav").animate({marginLeft:'10.5%'},30);
    });
});