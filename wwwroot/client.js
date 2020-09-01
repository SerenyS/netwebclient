$(function () {
    $('.code').on('click', function (e) {
        e.preventDefault();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).on('keyup', function (e) {
    if (e.key === "Escape") {
        $('#toast').toast('hide');
    }
});

