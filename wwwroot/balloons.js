$(document).ready(function () {

    var animations = ["animated flash", "animated rubberBand", "animated bounce", "animated heartBeat"];
    var randomAnimation = Math.floor(Math.random() * animations.length);
    var animation = animations[randomAnimation];

    $('#happybirthday').addClass(animation);

})






$(function pickadate() {

    $('#birthday').pickadate({ format: 'mmmm, d' });
});



$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
        $('#' + this.id + 'Img').addClass('animated bounceOutUp');
});




$('#submit').click(function () {

    $('.form-check-input').is(':checked', false);
    {
        $('.toast').toast('show')
    }

});




   