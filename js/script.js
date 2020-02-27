$(document).ready(function () {
    $(".bookBox-1").click(slideUpFunction);
});

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