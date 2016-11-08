$(function(){
	var close=$('.ron');
	var open=$('.sear')
	$(open).click(function(){
       $('ul li').not($('.icon')).addClass('suoxiao')
       $('ul li').not($('.icon')).removeClass('fangda')
       setTimeout(function(){
           $('ul li').not($('.icon')).css({
        display:'none'
       })
          $(close).css({
        display:'block'
       })
          $('.search-box').css({
        display:'block'
       })
        setTimeout(function(){
        $('.suoyin a:nth-child(1)').addClass('positions')
        $('.suoyin a:nth-child(2)').addClass('positions')
        $('.suoyin a:nth-child(3)').addClass('positions')
        $('.suoyin a:nth-child(4)').addClass('positions')
       },50)   
       },500)
	     $(document.body).css({
	     	background:'#eee'
	     })
	})
   $(close).click(function(){
       $('.search-box').css({
	     	display:'none'
	     })
	     $('ul li').css({
	     	display:'inline-block'
	     })
       setTimeout(function(){
        $('ul li').not($('.icon')).addClass('fangda')
        $('ul li').not($('.icon')).removeClass('suoxiao')
       },100)
	     $(this).css({
	     	display:'none'
	     })
	     $('.suoyin a:nth-child(1)').removeClass('positions')
	     $('.suoyin a:nth-child(2)').removeClass('positions')
	     $('.suoyin a:nth-child(3)').removeClass('positions')
	     $('.suoyin a:nth-child(4)').removeClass('positions')
   })
     
// 小
 var h=$(window).height()
$('.mind').click(function(){
	$(".mind span:nth-child(1)").toggleClass('active')
	$(".mind span:nth-child(2)").toggleClass('active1')
	$('.min-nav .goshop').toggleClass('nav-syn')
	 $('.nav-sy').height(h)
	setTimeout(function(){	
     $('.nav-sy').toggleClass('nav-syh')
   setTimeout(function(){
   $('.nav-sy li:nth-child(1)').toggleClass('positions')
	 $('.nav-sy li:nth-child(2)').toggleClass('positions')
	 $('.nav-sy li:nth-child(3)').toggleClass('positions')
	 $('.nav-sy li:nth-child(4)').toggleClass('positions')
	 $('.nav-sy li:nth-child(5)').toggleClass('positions')
	 $('.nav-sy li:nth-child(6)').toggleClass('positions')
	 $('.nav-sy li:nth-child(7)').toggleClass('positions')
     },100)
	})
})


//小屏抽屉式布局
       var titles=$('.first-box h3');
       $(titles).click(function(){
       $('.first-box ul').eq(titles.index(this)).slideToggle();
       })

// 无缝轮播图
    var imgs=$('.banner')
    var lbtn=$('.lbtn .button');
    var rbtn=$('.rbtn .button')
    t=setInterval(times,3000)
    function times(){
    var sw=$(window).width()
    imgs.animate({marginLeft:+'-'+sw+'px'},2000,function(){
     $(imgs).css('marginLeft','0');
     $('.banner div:first').remove().clone(true).appendTo(imgs);
         })
      }
     $('.banner-box').hover(function(){
     clearInterval(t)
     },function(){
      t=setInterval(times,3000)
     })
      //按钮
      $('.rbtn').hover(function(){
      	$('.rbtn .button').css({
      		display:'block'
      	})
      },function(){
          $('.rbtn .button').css({
      		display:'none'
      	})
      })
       $('.lbtn').hover(function(){
      	$('.lbtn .button').css({
      		display:'block'
      	})
      },function(){
          $('.lbtn .button').css({
      		display:'none'
      	})
      })
     var flag=true;
     $(rbtn).click(function(){
     var sw=$(window).width()	
     if (!flag) {return };   
     flag=false;  
     $(imgs).animate({marginLeft:'-1336'},1000,function(){
     $(imgs).css('marginLeft','0');
     $('.banner div:first').remove().clone(true).appendTo(imgs)
     flag=true;
           })  
        })  
     $(lbtn).click(function(){
     var sw=$(window).width()	
     if (!flag) {return };
     flag=false;
     $(imgs).css({marginLeft:'-1336'});
     $('.banner div:last').remove().clone(true).prependTo(imgs);
     $(imgs).animate({marginLeft:0},1000,function(){
        flag=true;
     })
     })


})