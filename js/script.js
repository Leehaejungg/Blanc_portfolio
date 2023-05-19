// 서브메뉴
$('.submenu').hide();
$('.gnb2 li').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown()
});
$('.gnb2 li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp()
});