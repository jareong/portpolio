$(function () {
  //클릭메뉴
  const $backShadow = $('#wrap > .shadow');
  const $gnbMnu = $('#wrap > .gnb ')
  const $menu = $('header > .gnb_top > .gnb_right > p.mnu')
  const $btnCls = $('.gnb_con > ul > li.logo_mnu > ol > li.close')

  // slide
const $xcImage = $('article.slide > .con')
const $slideCon = $('article.slide > .click_slide > .slide_container >ul >li')
const $xcSlide = $('article.slide > .click_slide ')
const $shadow = $('article.slide > .shadow')
const $close = $('article.slide > .click_slide > button')
const $gallery = $('article.slide > p.gallery')
const $btnPrev = $('.prev')
const $btnNext = $('.next')
const $btnAuto  = $('.btn_auto')

 //  safety
const $safe = $('article.safe > .safe_text > ul.safe_list');
const $exp = $('article.safe  .safe_exp ');
const $movie = $('article.safe > .safe_movie');

// 메뉴클릭시 오른쪽에서 나왔다가 사라자기)
 $menu.on('click',function(evt){
   evt.preventDefault();

   $backShadow.fadeIn(50);
   $gnbMnu.addClass('open');
   $('html').addClass('open');
 });

  $btnCls.on('click',function(){
    $backShadow.fadeOut(50);
    $gnbMnu.removeClass('open');
    // 메뉴보일때 백그라운드 안움직임
    $('html').removeClass('open');
});


$btnAuto.on('click',function(){  
  $('.visual > video').get(0).pause(); 
  $('.btm > .left >video').get(0).pause(); 
  $('.safe_movie > p.on > video').get(0).pause(); 

  if($(this).hasClass('pause')){       
    //2. 인터벌 중지
    clearInterval(intervalKey);
    $(this).removeClass('pause');
    $('.visual > video').get(0).play(); 
    $('.btm > .left > video').get(0).play(); 
    $('.safe_movie > p.on > video').get(0).play();
    
  }else{    
    $(this).addClass('pause')    
    //2. setInterval()로 반복 실행
    intervalKey = setInterval(function(){
      $btnNext.trigger('click');  //이벤트 강제발생
    },2000);
  }         
});

// 페이드 슬라이드
let intervalKey = null;   
let nowIdx = 0
$slideCon.eq(nowIdx).show();

$btnNext.on('click',function(evt){
  evt.preventDefault();
  
  if(nowIdx<9){
    nowIdx++;
  }else{
    nowIdx = 0;
  }
  $slideCon.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
});

// 이전 버튼에 대한 클릭이벤트 구문
$btnPrev.on('click',function(evt){
  evt.preventDefault();

  if(nowIdx>0){
    nowIdx--;
  }else{
    nowIdx = 9;
  }

  $slideCon.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
});

// 클릭 slide (보이게 하는거)
  $xcImage.find('a').on('click',function(evt){
    evt.preventDefault();    
    $shadow.fadeIn(50);
    $xcSlide.fadeIn(100);
  });

  $gallery.on('click',function(evt){
    evt.preventDefault();
    $shadow.fadeIn(50);
    $xcSlide.fadeIn(100);
  });

  $close.on('click',function(){
    $xcSlide.fadeOut(100);
    $shadow.fadeOut(100);
  });



  //safety 클릭 
  $safe.children('.one').on('click',function(evt){
    evt.preventDefault();    
    $(this).addClass('on').siblings().removeClass('on');
    $movie.children('.slide-1').addClass('on').siblings().removeClass('on');    
    $exp.children('.one').addClass('on').siblings().removeClass('on');
  });

  $safe.children('.two').on('click',function(evt){
    evt.preventDefault();    
    $(this).addClass('on').siblings().removeClass('on');
    $movie.children('.slide-2').addClass('on').siblings().removeClass('on');    
    $exp.children('.two').addClass('on').siblings().removeClass('on');
  });

  $safe.children('.three').on('click',function(evt){
    evt.preventDefault();    
    $(this).addClass('on').siblings().removeClass('on');
    $movie.children('.slide-3').addClass('on').siblings().removeClass('on');    
    $exp.children('.three').addClass('on').siblings().removeClass('on');
  });
  




});