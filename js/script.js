function slideUpFunction() {
    $(".main-title").slideUp();
    $(".blurb").slideUp();
    $(".bookDescriptions-iamprincess").delay(500).slideDown();
    $(".readNowbutton").delay(1000).animate({
        opacity: 1,
        width: "300",
    });
    $("body").css("background-color", "#8D999E")
    $(".bookBox-1").unbind("click", slideUpFunction);
    $(".bookBox-1").click(slideDownFunction);
}

function slideDownFunction() {
    $(".bookDescriptions-iamprincess").fadeOut();
    $(".main-title").delay(800).slideDown();
    $(".blurb").delay(500).slideDown();
    $("body").css("background-color", "#A5B4BA")
    $(".bookBox-1").unbind("click", slideDownFunction);
    $(".bookBox-1").click(slideUpFunction);
}
$(document).ready(function () {
    $(".bookBox-1").click(slideUpFunction);
});