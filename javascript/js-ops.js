$(document).ready(function () {
    $("#menu").click(function () {

        var elements = document.getElementsByClassName("left-options-text");
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("remove-item");
        }

        var leftDiv = document.getElementsByClassName("left-content");

        for( i=0 ; i< leftDiv.length ; i++) {
            leftDiv[i].classList.toggle("left-content-decrease");
        }

        var subHeader = document.getElementById("sub-header");
        subHeader.classList.toggle("remove-item");

        var header = document.getElementById("divider");
        header.classList.toggle("margin-below");


    });
});