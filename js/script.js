$(document).ready(function () {

    //BRINGS UP BOOK SYNOPSIS

    $(".bookBox-1").click(slideUpFunction);

    function slideUpFunction() {
        $(".main-title").slideUp();
        $(".blurb").slideUp();
        $(".bookDescriptions-iamprincess").delay(500).slideDown();
        $(".readNowbutton").delay(1000).animate({
            opacity: 1,
            width: "300",
        });
        $(".bookBox-1").unbind("click", slideUpFunction);
        $(".bookBox-1").click(slideDownFunction);
    }

    function slideDownFunction() {
        $(".bookDescriptions-iamprincess").fadeOut();
        $(".main-title").delay(800).slideDown();
        $(".bookBox-2, .bookBox-3, .bookBox-4, .bookBox-5").animate({
            top: "0",
        });
        $(".blurb").delay(500).slideDown();
        $(".bookBox-1").unbind("click", slideDownFunction);
        $(".bookBox-1").click(slideUpFunction);

    }

    //BRINGS UP FULL STORY


    $(".readNowbutton").click(readNow);

    function readNow() {
        $(".bookBox-1, .bookBox-2, .bookBox-3, .bookBox-4, .bookBox-5").animate({
            top: "800",
        });
        $(".selectStoryBox").animate({
            right: "2800",
        });
        $(".bookDescription-1").delay(1000).animate({
            top: "120",
        });
        $("hr").slideToggle();
        $("hr").unbind("click");
        $(".readNowbutton").unbind("click");
        $(".readNowbutton").click(readNowReverse);
    }

    function readNowReverse() {
        $(".bookBox-1, .bookBox-2, .bookBox-3, .bookBox-4, .bookBox-5").animate({
            top: "0",
        });
        $("hr").slideToggle();


    }

});