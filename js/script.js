function slideUpFunction() {
    $(".main-title").slideUp();
    $(".blurb").slideUp();
    $(".bookDescriptions-kinkyKenny").delay(500).slideDown();
    $(".readNowbutton").delay("slow").animate({
        delay: 13,
        opacity: 1,
        
    });
    $(".bookBox-1").unbind("click", slideUpFunction);
    $(".bookBox-1").click(slideDownFunction);
}

function slideDownFunction() {
    $(".bookDescriptions-kinkyKenny").slideUp();
    $(".main-title").delay(800).slideDown();
    $(".blurb").delay(500).slideDown();
    $(".bookBox-1").unbind("click", slideDownFunction);
    $(".bookBox-1").click(slideUpFunction);
}
$(document).ready(function () {
    $(".bookBox-1").click(slideUpFunction);
});