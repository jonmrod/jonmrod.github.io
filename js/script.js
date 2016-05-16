$(document).ready(function() {
    //mouse movement
    $('html').mousemove(function(e){
        var movedX = (e.pageX * -1 / 20);
        var movedY = (e.pageY * -1 / 20);
        $(this).css('background-position', movedX + 'px ' + movedY + 'px');
    });
    setTimeout(function() {
        //animate logo, increase height/width
        $('#section1 img').animate({
        width: '+=10',height: '+=10', opacity: 1});
        //animate text
        setTimeout(function() {
            $('#textBody').animate({'font-size': '-=2pt', opacity: 1});
        }, 600);
        setTimeout(function() {
            $('#textBody p').animate({'font-size': '-=2pt', opacity: 1});
        }, 700);
        //hr line
        setTimeout(function() {
            $('hr').animate({width: '50%', opacity: 1})
        }, 800);
        //delay background
        setTimeout(function() {
            $('html').css("background-image", "url('./icons/bg.png')");
        }, 2000);
        //link images
        setTimeout(function() {
            $('#images img').animate({width: '25px', height: '25px', opacity: 1})
        }, 900);


    }, 500);
});
