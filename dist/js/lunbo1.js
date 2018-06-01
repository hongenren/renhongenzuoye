	
		$(function(){
			$list=$(".big1 li")
			$smalnum=$(".btnbg1 em")
			$indexlunbo=$(".lunbo1")
				var timer=null;
				var i=0;
				show()
		$smalnum.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$indexlunbo.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$indexlunbo.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$list.length){
			$(".big1 li").css({'left':'0'});
				i=1;
			}
			$list.stop().animate({"left":-i*268},1000,function(){
				
			})
			if(i==$list.length-1){
				$smalnum.eq(0).addClass("on").siblings().removeClass("on")
			}else{
				$smalnum.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})		
//2

		$(function(){
			$list2=$(".big2 li")
			$smalnum2=$(".btnbg2 em")
			$indexlunbo2=$(".lunbo2")
				var timer=null;
				var i=0;
				show()
		$smalnum2.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$indexlunbo2.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$indexlunbo2.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$list2.length){
			$(".big2 li").css({'left':'0'});
				i=1;
			}
			$list2.stop().animate({"left":-i*268},1000,function(){
				
			})
			if(i==$list2.length-1){
				$smalnum2.eq(0).addClass("on").siblings().removeClass("on")
			}else{
				$smalnum2.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})		
//banner

//lunbo
	$(function(){
	
			$picList=$(".banner-pic li");
			$picnum=$(".banner-number li")
			$banner=$(".banner")
			$number=$(".banner-number li")
				var timer=null;
				var i=0;
		$picList.eq(0).show().fadeIn().animate({},100)
			.siblings().fadeOut().animate({},100)	
				show()
		$number.hover(function(){
			clearInterval(timer)
					i = $(this).index();
					move();
		})
		
		$banner.mouseover(function(){
			clearInterval(timer)
		})
		
		$banner.mouseout(function(){
			show()
		})
		function move(){				
			
			$picList.eq(i).fadeIn().animate({},100)
			.siblings().fadeOut().animate({},100)
		$picnum.eq(i).addClass("on").siblings().removeClass("on")
		}
		function show(){
			timer=setInterval(function(){
				i++;
			if(i==$picList.length){
				i=0;
			}
			move();
			},2000)
		}
		})
//lunbojieshu	

//dianjiyyoujian
	//.receboxs raceright racele rightnav
		
	$(function(){
		var i=0;
		$(".raceright").click(function(){
			i++
			if(i==3){
				i--
			}
			$(".receboxs").stop().animate({'left':-i*1198},1000)
			$(".rightnav span").eq(i).addClass("on").siblings().removeClass("on")
		})

	
	$(".raceleft").click(function(){
		i--;
		console.log(i)
		if(i==-1){
			i=0;
		}
		console.log(i)
		$(".receboxs").stop().animate({'left':-i*1198},1000)
		$(".rightnav span").eq(i).addClass("on").siblings().removeClass("on")
	})
	
	})	
	//lunbo3一楼
		
			$(function(){
			$bigul1=$(".bigul1 img")
			$btnbox1=$(".btnbox1 em")
			$bannerslier1=$(".bannerslier1")
				var timer=null;
				var i=0;
				show()
		$btnbox1.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$bannerslier1.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$bannerslier1.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$bigul1.length){
			$(".bigul1 img").css({'left':'0'});
			
				i=1;
				
			}
			$bigul1.stop().animate({"left":-i*210},1000,function(){
				
			})
			if(i==$bigul1.length-1){
			$btnbox1.eq(0).addClass("on").siblings().removeClass("on")
				
			}else{
				$btnbox1.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})	
	
	
	

//结束
//erlou开始
	$(function(){
			$bigul2=$(".bigul2 img")
			$btnbox2=$(".btnbox2 em")
			$bannerslier2=$(".bannerslier2")
				var timer=null;
				var i=0;
				show()
		$btnbox2.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$bannerslier2.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$bannerslier2.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$bigul2.length){
			$(".bigul2 img").css({'left':'0'});
			
				i=1;
				
			}
			$bigul2.stop().animate({"left":-i*210},1000,function(){
				
			})
			if(i==$bigul2.length-1){
			$btnbox2.eq(0).addClass("on").siblings().removeClass("on")
				
			}else{
				$btnbox2.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})	

//二楼结束
//三楼开始
$(function(){
			$bigul3=$(".bigul3 img")
			$btnbox3=$(".btnbox3 em")
			$bannerslier3=$(".bannerslier3")
				var timer=null;
				var i=0;
				show()
		$btnbox3.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$bannerslier3.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$bannerslier3.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$bigul3.length){
			$(".bigul3 img").css({'left':'0'});
			
				i=1;
				
			}
			$bigul3.stop().animate({"left":-i*210},1000,function(){
				
			})
			if(i==$bigul3.length-1){
			$btnbox3.eq(0).addClass("on").siblings().removeClass("on")
				
			}else{
				$btnbox3.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})	
//三楼结束
//四楼开始
$(function(){
			$bigul4=$(".bigul4 img")
			$btnbox4=$(".btnbox4 em")
			$bannerslier4=$(".bannerslier4")
				var timer=null;
				var i=0;
				show()
		$btnbox4.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$bannerslier4.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$bannerslier4.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$bigul4.length){
			$(".bigul4 img").css({'left':'0'});
			
				i=1;
				
			}
			$bigul4.stop().animate({"left":-i*210},1000,function(){
				
			})
			if(i==$bigul4.length-1){
			$btnbox4.eq(0).addClass("on").siblings().removeClass("on")
				
			}else{
				$btnbox4.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})	
//四楼结束
//五楼开始
$(function(){
			$bigul5=$(".bigul5 img")
			$btnbox5=$(".btnbox5 em")
			$bannerslier5=$(".bannerslier5")
				var timer=null;
				var i=0;
				show()
		$btnbox5.hover(function(){
			clearInterval(timer)
			i = $(this).index()-1;
			move();
		})
		$bannerslier5.mouseover(function(){
			clearInterval(timer)
			console.log("aa")
		})
		$bannerslier5.mouseout(function(){
			show()
		})
		function move(){				
			i++
			if(i==$bigul5.length){
			$(".bigul5 img").css({'left':'0'});
			
				i=1;
				
			}
			$bigul5.stop().animate({"left":-i*210},1000,function(){
				
			})
			if(i==$bigul5.length-1){
			$btnbox5.eq(0).addClass("on").siblings().removeClass("on")
				
			}else{
				$btnbox5.eq(i).addClass("on").siblings().removeClass("on")
			}
		
		}
		
		function show(){
			timer=setInterval(function(){
			move();
			},2000)
		}
		
	})	
//五楼结束
function getDiffDays(date1,date2){
	var ss = Math.abs(date1-date2)/1000;
	
	var days = Math.floor(ss/24/3600);
	var hours = Math.floor(ss/3600%24);
	var minutes = Math.floor(ss/60%60);
	var seconds = Math.floor(ss%60);
	
	
	return days+"天"+hours+"时"+minutes+"分"+seconds+"秒";
	
}
//食品下面图片滑动
$(function(){
						
						$(".logoFirstbd li").mouseover(function(){
							var idx=$(this).index()
						$(".logoFirstbd img").eq(idx).stop().animate({'left':-100},1000)
//						console.log("aa")
							
						})
						$(".logoFirstbd li").mouseout(function(){
							var idx=$(this).index()
						$(".logoFirstbd img").eq(idx).stop().animate({'left':0},1000)
//						console.log("aa")
							
						})
							
						
					})
//食品下nav滑动

//