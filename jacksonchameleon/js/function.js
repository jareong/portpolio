$(function () {
  //select 슬라이드 
  const $select = $('.select > .select_container >.select_slide > ul.slide ')
  const $sPrev = $('.select_container > a.prev');
  const $sNext = $('.select_container > a.next');

  let selectIdx = 0; //select 인덱스

  $sPrev.on('click',function(evt){
    evt.preventDefault();
    if (selectIdx > 0){
      selectIdx--;
    }
    $select.stop().animate({
      left: -500 * selectIdx
    },400);
  });

  $sNext.on('click',function(evt){
      evt.preventDefault();
      if (selectIdx < 5){
        selectIdx++;
      }
      $select.stop().animate({
        left: -500 * selectIdx
      },400);
  });
  

  
  // 동영상슬라이드

  const $container = $('.video > .video_slide > .screen > ul');
  const $video = $container.children('li');
  const $vPrev = $('.video > .video_slide > a.prev');
  const $vNext = $('.video > .video_slide > a.next');

  let nowIdx = 1;


  $vNext.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx < 2){
      nowIdx++;
    }else{
      nowIdx=0;
    }
    $video.removeClass('on').eq(nowIdx).addClass('on');
    $container.stop().animate({left: -2260},function(){
      $('.video_slide > .screen > ul > li').first().appendTo($container);
      $container.css({
        left : -1030
      });
    });

  });

  $vPrev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx > 0){
      nowIdx--;
    }else{
      nowIdx=2;
    }
    $video.removeClass('on').eq(nowIdx).addClass('on');
    $container.stop().animate({left: 0},function(){
      $('.video_slide > .screen > ul > li').last().prependTo($container);
      $container.css({
        left : -1030
      });
    });

  });


  // business 슬라이드  
  const $business = $('.business > .business_slide > ul ');
  const $bBar = $('.business_slide > ol > li > a');
  const $bPrev = $('.business_slide > a.prev');
  const $bNext = $('.business_slide > a.next');
  
  let intervalKey = null;
	let nowIdxB = 0;
  
  clearInterval(intervalKey);
  intervalKey = setInterval(function(){
    $bNext.click();
  }, 3000);

  const bizfn = function(){
    $bBar.eq(nowIdxB).parent().addClass('on').siblings().removeClass('on');
  };

  // 아래 바
  $bBar.on('click',function(evt){
    evt.preventDefault();
    nowIdxB = $bBar.index(this)
    bizfn();
    $business.stop().animate({
      left: -(100 * (nowIdxB + 3)) + '%'
    });
  });

  $bPrev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdxB > 0){
      nowIdxB--;
    }else{
      nowIdxB = 2;
    }
    bizfn();
    $business.stop().animate({
      left:'-200%'
    },450,function(){
      $('.business_slide >ul >li').last().prependTo($business);
      $business.css({left: '-300%'})
    });
  });

  $bNext.on('click',function(evt){
    evt.preventDefault();

    if(nowIdxB < 2){
      nowIdxB++;
    }else{
      nowIdxB = 0;
    }
    bizfn();
    $business.stop().animate({
      left:'-400%'
    },450,function(){
      $('.business_slide >ul >li').first().appendTo($business);
      $business.css({left: '-300%'})
    });
  });


  // 전체 화면 스크롤
  const $aside = $('aside')
  const $top = $(' aside > a.top');
  const $btm = $('aside > a.btm');

  $(window).on('scroll',function(){
    let scrollTop = $(this).scrollTop();

    if(scrollTop > 400){
      $aside.stop().fadeIn(500);
    }else{
      $aside.stop().fadeOut(500);
    }
  });
  
  $top.on('click',function(evt){
    evt.preventDefault();
    
    $('html, body').stop().animate({
      scrollTop:0
    },800);   
  });
  
 
  $btm.on('click',function(evt){
    evt.preventDefault();

    $('html, body').stop().animate({      
        scrollTop: $(document).height()
      },800) 
    });   

});