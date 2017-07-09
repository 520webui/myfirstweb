// JavaScript Document

$(function(){	
	var timer=null;
	var num=0;
	
	$('.banner ul li').each(function(index, element) {
        $(element).css('background',' url(images/banner'+ (index+1) +'.jpg) no-repeat center top')
    });
	
	
	function autoplay(){
		clearInterval(timer)	
		timer=setInterval(function(){	
			num++;
			if(num>6){num=0};
			$('.banner ul').stop().animate({left:num*-100+'%'},30)
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
		},3000)
		
	}
	
	autoplay()
	
	//箭头控制
	
	$('.banner .banner_in .dian .left').click(function(e) {
        num--;
			if(num<0){num=6};
			$('.banner ul').stop().animate({left:num*-100+'%'},30)
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
    });
	
	$('.banner .banner_in .dian .right').click(function(e) {
        num++;
		if(num>6){num=0}
		$('.banner ul').stop().animate({left:num*-100+'%'},30)
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
		
    });
	
	
	
	//鼠标移上控制
	$('.banner').hover(function(e) {
        clearInterval(timer)
    },function(){	
	
		autoplay()
	});
	
	//控制dot
	
	$('.banner ol li').mouseover(function(e) {
        var index=$(this).index()
		$(this).addClass('current').siblings().removeClass('current')
		$('.banner ul').stop().animate({left:index*-100+'%'},30)
		num=index
    });
	
	
	
})






