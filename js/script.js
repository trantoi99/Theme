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
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    var nav = document.getElementById("mainNav");

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 80) {
        nav.classList.replace("large", "small");
    } else {
        nav.classList.replace("small", "large");
    }
}
$(document).on("click", function() {

    $("#btnMenu").click(function() {
        $("#demo").collapse('toggle');
    });
    $("a").click(function() {
        $("#demo").collapse('toggle');
    });
    $("body").click(function() {
        $("#demo").collapse('toggle');
    });

});
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();