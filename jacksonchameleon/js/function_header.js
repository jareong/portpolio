$(function (){
  // 맨위에 행사상품안내 
  const $top = $('#wrap > .top');
  const $topCls = $('#wrap > .top > a');

  // 헤더메뉴고정
  const $header = $('#wrap > header');

  //햄버거메뉴
  const $menu = $('.header_container > .membership > p.menu > a');
  const $menuAll = $('#wrap > .all');
  const $allCls = $('.all > .all_top > ul > li.all_close > a');

  // 행사상품 닫기
  $topCls.on('click',function(evt){
    evt.preventDefault();
    $top.stop().slideUp(500)
  });

  // 메뉴를 보이게
  $menu.on('click',function(evt){
    evt.preventDefault();
    $menuAll.stop().fadeIn(100);    
  });

  $allCls.on('click',function(evt){
    evt.preventDefault();
    $menuAll.stop().fadeOut(100);
  });

  // header 고정
  $(window).on('scroll',function(){  
    let scrollTop = $(this).scrollTop();

    if(scrollTop > $header.height()){  

      $header.addClass('fixed');
      $menuAll.addClass('fixed');           
    }else{
      $header.removeClass('fixed');     
      $menuAll.removeClass('fixed');     
    }
  }); 

});