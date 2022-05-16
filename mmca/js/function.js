
$(function(){
  // gnb
  const $gnbmnu = $('.gnb>ul>li');
  const $lnb = $gnbmnu.children('.lnb');
  const $shadow = $('.shadow')
  // const $search = $('li.search')  
  
  // 슬라이드영역
  const $slides = $('.visual-con>ul>li');
  const $btnPrev = $('.prev');
  const $btnNext = $('.next');  
  
  // 돋보기 클릭
  const $search = $('nav>.search');
  const $searchCls = $('nav>.search-cls');
  const $srcContainer = $('nav>.search-con');
  
  // 예약부분 올라가는거
  const $rsvCls = $('header > .rsv > .cls');
  const $rsv = $('header > .rsv');

  // 메뉴부분 고정
  const $nav = $('header>nav');
  const $logo = $('header>h1');


  let mnuIdx = null;

  // gnb&lnb
  $gnbmnu.hover(
    function(){

      mnuIdx = $gnbmnu.index(this); 
      const $select = $gnbmnu.eq(mnuIdx).children('a');
      const $others = $gnbmnu.eq(mnuIdx).siblings().children('a');
      $select.css({
        color : 'black'
      }).show(); 
      $others.css({
        color : '#666'
      }).show;  
      $lnb.eq(mnuIdx).fadeIn(100);      
      $shadow.show();
    }
    ,
    function(){ 
      $lnb.hide();
      $shadow.hide();
      $gnbmnu.children('a').css({
        color : 'black'
      }).fadeIn();       
    }
  ); 

  // 비주얼슬라이드
  let intervalKey = null;   
  let nowIdx = 0;   //Math.floor(Math.random()*7)

  $slides.eq(nowIdx).show()

	const fadeFn = function(){		
		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
	};

  $btnNext.on('click',function(evt){
		evt.preventDefault();
		
		if(nowIdx<6){
			nowIdx++;
		}else{
			nowIdx = 0;
		}
		fadeFn(); 
	});

  $btnPrev.on('click',function(evt){
		evt.preventDefault();

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx = 6;
		}
		fadeFn(); 
	});

 
  // 돋보기클릭
  $search.on('click',function(evt){
    evt.preventDefault();

    $search.hide();
    $searchCls.show();
    $srcContainer.stop().slideDown(500);
    $shadow.show();  
  });

  $searchCls.on('click',function(evt){
    evt.preventDefault();

    $srcContainer.stop().slideUp(500);    
    $searchCls.hide();
    $search.show();
    $shadow.hide();  
  });


  // 예약부분 올라가는거
  $rsvCls.on('click',function(evt){
    evt.preventDefault();

    $rsv.stop().slideUp(500)
    
  });


  // 스크롤을 내리다가 중간에 네비게이션 고정!
  $(window).on('scroll',function(){
    // 현재 스크롤바의 top 값 추출
    let scrollTop = $(this).scrollTop();

    if(scrollTop> $(this).height()){  

      $nav.addClass('fixed');
      $logo.addClass('fixed');
      // $('#aboutme').css({
      //   marginTop : $header.height()
      // });
    }else{
      $nav.removeClass('fixed');
      $logo.removeClass('fixed');
      // $('#aboutme').css({
      //   marginTop : 0
      // });
    }
  });



  // 스마트검색  
  $('.top').on('click', function(evt){
    evt.preventDefault();

    $('html, body').stop().animate({
      scrollTop:0
    });

  });

});



   



