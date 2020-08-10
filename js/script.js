function topFunction1() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).on("scroll", function() {
    var mybutton = document.getElementById("myBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
});