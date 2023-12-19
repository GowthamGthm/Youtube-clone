$(document).ready(function () {
    $("#menu").click(function () {

        var elements = document.getElementsByClassName("left-options-text");
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("remove-item");
        }

    });
});