// JavaScript Document

$(function () {

    $(".doc>div").eq(0).removeClass("no");

    //$(".doc").css("top","-400%");
    //gps点击切换
    $(".gps li").click(function () {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".doc").stop().animate({"top": -index * 100 + "%"}, 500);
        //点击完li的时候要更新num,赋值给num,让它等于index
        num = index;
        $(".doc>div").eq(index).removeClass("no").siblings().addClass("no");
    });
    var num = 0;

    var timer = null;
    var h=0
    $(".ctr").click(function () {
        num++
        $(".doc").stop().animate({"top": -num * 100 + "%"}, 500);
        $(".gps li").eq(num).addClass("current").siblings().removeClass("current");
        $(".doc>div").eq(num).removeClass("no").siblings().addClass("no");
    })

    $(window).mousewheel(function (e, d) {
        //console.log(d);
        //假设向下滚动 -1
        //0-1=1
        //1-1=2
        //2-1=3
        //3-1=4
        //假设向上滚动1
        //4-1=3
        clearTimeout(timer);

        timer = setTimeout(function () {
            num -= d;
            if (num > 5) {
                num = 5
            }
            if (num < 0) {
                num = 0
            }
            console.log(num);
            $(".doc").stop().animate({"top": -num * 100 + "%"}, 500);
            $(".gps li").eq(num).addClass("current").siblings().removeClass("current");
            $(".doc>div").eq(num).removeClass("no").siblings().addClass("no");

        }, 300);
    });

    $('.screen6 ol li').click(function (e) {
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.screen4 ul').eq(index).show().siblings().hide();
    });
    $(".little_cir>li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var Iindex = $(this).index();
        $(".web>li").eq(Iindex).animate({
            opacity: 1
        }, 400).siblings().animate({
            opacity: 0
        }, 400);
    })
    var timer = 0;
    var i = 0;
    timer = setInterval(function () {
        i++;
        if (i > 3) {
            i = 0
        }
        $(".web>li").eq(i).animate({
            opacity: 1
        }, 1000).siblings().animate({
            opacity: 0
        }, 1000);
        $(".little_cir>li").eq(i).addClass("current").siblings().removeClass("current");
    }, 2000)
    var j = 0;
    $("#ctr_left").click(function () {
        j++;
        $(".phone_top li").eq(j).animate({
            opacity: 1
        }, 400).siblings().animate({
            opacity: 0
        }, 400);
        $(".small_pic").css({
            left: -j * 226
        })
        $(".small_pic>li").eq(j).animate({
            opacity:1
        }).siblings().animate({
            opacity:.4
        })
        if (j > 4) {
            j = 4
        }
    })
    $("#ctr_right").click(function () {
        $(".phone_top li").eq(j).animate({
            opacity: 1
        }, 400).siblings().animate({
            opacity: 0
        }, 400);
        $(".small_pic").css({
            left: -j * 226
        }, 400);
        $(".small_pic>li").eq(j).animate({
            opacity:1
        }).siblings().animate({
            opacity:.4
        })
        j--;
        if (j < 0) {
            j = 0;
        }
    })
    var n=0;
    $(".banner li").click(function () {
        n=$(this).index();
        $(this).siblings().fadeOut(600,function () {
            $(".banner>li").eq(n).animate({
                width:960
            },1200,function () {
                $(".screen4 p").animate({
                    opacity:1
                })
            });
        });
    })
    $(".screen4 p").click(function () {
        console.log(123);
        $(this).css({
            opacity:0
        },function () {
            console.log(123);
            $(".banner>li").eq(n).animate({
                width:157
            },1200)
        })
    })

})


























