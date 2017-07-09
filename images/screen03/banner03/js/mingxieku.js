// JavaScript Document

$(function(){	
	var timer=null;
	var num=0;
	
	$('.banner .banner_1 li').each(function(index, element) {
        $(element).css('background','url(imges/banner'+ (index+1) +'.jpg) no-repeat center top')
    });
	
	function autoplay(){	
			clearInterval(timer)
			timer=setInterval(function(){	
				num++;
				if(num>1){num=0}
				$('.banner .banner_1').stop().animate({left:num*-100+'%'},1000)
			},2000)
	}
	
	autoplay()
	
	$('.banner').hover(function(e) {
        	clearInterval(timer)
    },function(){	
			autoplay()
	});
	
	
})



