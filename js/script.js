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

    //REVERSES SYNOPSIS

    function slideDownFunction() {
        $(".bookDescriptions-iamprincess").fadeOut();
        $(".main-title").delay(800).slideDown();
        $(".readNowbutton").delay(1000).animate({
            opacity: 1,
            width: "300",
        });
        $(".bookBoxes").delay(800).slideToggle();
        $(".blurb").delay(500).slideDown();
        $(".bookBox-1").unbind("click", slideDownFunction);
        $(".bookBox-1").click(slideUpFunction);

    }

    //BRINGS UP FULL STORY

    $(".readNowbutton").click(readNow);

    function readNow() {
        $(".bookBoxes").delay(500).slideToggle();
        $(".selectStoryBox").slideToggle();
        $(".bookDescription-1").delay(1000).animate({
            top: "120",
        });
        $("hr").slideToggle();
        $("hr").unbind("click");
        $(".readNowbutton").unbind("click");
        $(".readNowbutton").click(readNowReverse);
    }

    //REVERSES FULL STORY

    function readNowReverse() {
        $(".bookBoxes").slideToggle();
        $(".selectStoryBox").slideToggle();
        $(".bookDescription-1").animate({
            top: "0",
        });
        $("hr").slideToggle();
        $(".iAmaPrincess-descripText").delay(500).animate({
            left: "2000",
        });
        $(".iAmaPrincess-title").delay(500).animate({
            right: "2000",
        });
        $(".readNowbutton").delay(500).fadeOut();


    }

});