$(document).ready(function () {
    // back to top
    $(".backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
});

// Menu
document.querySelector('.btmenu').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.classList.toggle('clicked');
});
