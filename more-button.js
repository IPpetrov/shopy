$(function () {
    $('.btn-more').click(function () {
        $('.arrivals div:hidden').slice(0, 15).show();
        if ($('.arrivals div').length == $('.arrivals div:visible').length) {
            $('.btn-more ').hide();
        }
    });
});