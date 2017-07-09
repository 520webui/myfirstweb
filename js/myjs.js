// JavaScript Document



$(function(){	

	//$('.doc').css('top',-0+'%');          //页面刷新，直接呈现第3屏
	$('.screen01').removeClass('start');   //页面刷新，让首屏去掉start

	var num = 0;
	var timer = null;

	/*鼠标单击事件----导航*/

	$('.gps li').click(function(){	
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.doc').stop().animate({top:-index*100+'%'},300);
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
	$('.nav_r li a').eq(index).addClass('current02').parents().siblings().children().removeClass('current02');
		num=index;
	})
	
	/*导航点击事件*/
	
	$('.nav_r li').click(function(){
		var index = $(this).index();
        $('.doc').stop().animate({top:-(index)*100+'%'},300)
		$('.nav_r li a').eq(index).addClass('current02').parents().siblings().children().removeClass('current02');
		$('.gps li').eq(index).addClass('current').siblings().removeClass('current');
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
		num=index;
    });
	

	/*鼠标滚轮事件----页面*/

	$(window).mousewheel(function(e,d){	
		/*当鼠标往下滚动一次的时候，d=-1*/
		
		
		/*函数截流*/
		
		clearTimeout(timer);
		timer = setTimeout(function(){	
			num=num-d;
			if(num>5){num=5}
			if(num<0){num=0}
			$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
			$('.doc').stop().animate({top:-num*100+'%'},300);
			$('.doc>div').eq(num).removeClass('start').siblings().addClass('start');
			$('.nav_r li a').eq(num).addClass('current02').parents().siblings().children().removeClass('current02');
		},300)
		
	})


	//screen3轮播
	;(function(){	
	
			$(function(){	
				var timer=null;
				var num=0;
				
		/*$('.banner ul li').each(function(index, element) {
			
			$(element).css('background',' url(images/banner'+ (index+1) +'.jpg) no-repeat center top')
		});*/
		
		
		function autoplay(){
			clearInterval(timer)	
			timer=setInterval(function(){	
				num++;
				if(num>7){num=0};
				$('.banner ul').stop().animate({left:num*-100+'%'},30)
				$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
			},3000)
			
		}
		
		autoplay()
		
		//箭头控制
		
		$('.banner .banner_in .dian .left').click(function(e) {
			num--;
				if(num<0){num=7};
				$('.banner ul').stop().animate({left:num*-100+'%'},30)
				$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current')
		});
		
		$('.banner .banner_in .dian .right').click(function(e) {
			num++;
			if(num>7){num=0}
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
	
		
		
	
	})();
	
	
	
	//screen04鼠标滑动事件
		
			/*$(function(){
				$('.screen04 .all4 h2 div').hover(function(e) {
					var index=$(this).index();
					$('.screen04 .all4 .content div').eq(index).show().siblings().hide();
				});
			})*/
			$(function(){
				$('.screen04 .all4 h2 div').click(function(e) {
					var index=$(this).index();
					$('.screen04 .all4 .content div').eq(index).show().siblings().hide();
				});
			})
			
	
	//screen05进度条事件
		$(function(){	
			$('.jineng li').hover(function(e) {
					var index=$(this).index()
				$(this).children('span').stop().animate({top:0},300)
			},function(){	
			 $(this).children('span').stop().animate({top:53},300)
			});
	})
	
	
	
	;(function(){
		
		var num=0;
		$('.screen04 .all4 .up .left').click(function(e) {
			num--;
				if(num<0){num=3};
				$('.screen04 .all4 .first').stop().animate({left:num*-100+'%'},300)
		});
		
		$('.screen04 .all4 .up .right').click(function(e) {
			num++;
			if(num>3){num=0}
			$('.screen04 .all4 .first').stop().animate({left:num*-100+'%'},300)
		});
	})();
	
	
	
})























