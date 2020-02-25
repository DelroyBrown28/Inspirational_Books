$(document).ready(function () {

    $(".bookBox-1").click(function () {
        $(".descriptionBoxes").delay(500).slideToggle("medium");
    });

    $(".bookBox-1").click(function () {
        $(".main-title").slideToggle("medium");
        $(".blurb").slideToggle("fast");
    });

});