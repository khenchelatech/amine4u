$(function () {
    $('.recent_post').click(function () {
        $('.loader_post').addClass('show');
    $(".recent_post").addClass('active');
    $(".popularPostsWrap,.topviews").removeClass('active');
        setTimeout(function () {
            $('.main').addClass('active');
        $('.loader_post').removeClass('show');
        }, 2000);
    });
});

$(function () {
    $('.topviews').click(function () {
$('.loader_post').addClass('show');
$(".topviews").addClass('active');
$(".main,.recent_post").removeClass('active');
        setTimeout(function () {
$('.popularPostsWrap').addClass('active');
$('.loader_post').removeClass('show');
        }, 2000);
    });
});
});
