$(document).ready(function() {
    $('.buttonIconSecond').click(function() {
        $('.listWithImages').slideToggle("fast");
        $('.tabletList').hide();
        $('.simpleList').hide();
    });
    $('.buttonIcon').click(function() {
        $('.tabletList').slideToggle("fast");
        $('.listWithImages').hide();
        $('.simpleList').hide();
    });

    $('.buttonIconThird').click(function() {
        $('.simpleList').slideToggle("fast");
        $('.listWithImages').hide();
        $('.tabletList').hide();
    });
});

