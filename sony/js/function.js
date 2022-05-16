$(function () {

  // nav
  const $gnb = $('#wrap > header > .h_top > nav > .gnb')
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');  

  $gnb.on('mouseover', function () {
    $bg_lnb.stop().slideDown(50);
    $lnb.stop().slideDown(50);
  });
  
  $gnb.on('mouseout', function () {
    $lnb.stop().slideUp(50);
    $bg_lnb.stop().slideUp(50);
  });

  $bg_lnb.on('mouseover', function () {
    $gnb.trigger('mouseover');
  });
  
  $bg_lnb.on('mouseout', function () {
    $gnb.trigger('mouseout');
  });


// visual slides
const $slides = $('section > .sec_con > .visual > .slides-container>p')
const $span = $('.slides-container> p > span')
const $detail = $('.slides-container> p > a')
const $btnLeft = $('.visual > a.left');
const $btnRight = $('.visual > a.right');
const $current = $('.visual > p.slides-progress > span.current')

// let intervalKey = null;   
let nowIdx = 0;

const fadeFn = function(){
  $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000); 
  $span.eq(nowIdx).addClass('move').siblings().removeClass('move')
  $detail.eq(nowIdx).addClass('move').siblings().removeClass('move')
};

// visual slides 오른쪽
$btnRight.on('click',function(evt){
  evt.preventDefault();
  if(nowIdx < 4){
    nowIdx++;
  }else{
    nowIdx = 0;
  }
  fadeFn();
  // $span.eq(nowIdx).addClass('move').siblings().removeClass('move')
  $current.text('No.0' + (nowIdx + 1));
});

// visual slides 왼쪽
$btnLeft.on('click',function(evt){
  evt.preventDefault();

  if(nowIdx > 0){
    nowIdx--;
  }else{
    nowIdx = 4;
  }
  fadeFn();
  // $span.eq(nowIdx).addClass('move').siblings().removeClass('move')
  $current.text('No.0' + (nowIdx + 1));
});


// main (3개동시: 왼편큰사진+오작은사진(글작들)+아래인디케이트)
const $check = $('.main > .main-container > .main-right > .check > ol > li');
const $mainLeft = $('.sec_con > .main > .main-container > .main-left >p')
const $mRight = $('.main-right > .right-container > a.right')
const $mrContainer = $('.main > .main-container > .main-right > .right-container > ul')


// let intervalKeyM = null;   
let nowIdxM = 0;

const fadeMFn = function(){ 
  $check.eq(nowIdxM).addClass('on').siblings().removeClass('on');  // 아래체크활성화
  $mainLeft.eq(nowIdxM).fadeIn(500).siblings().fadeOut(500); //왼 슬라이드 처리
};


$mRight.on('click',function(evt){
  evt.preventDefault();  
  
    if(nowIdxM<3){
    nowIdxM++;
  }else{
    nowIdxM = 0;
  }
  // $mainLeft.stop().animate({left: -833},function(){
  //   $('.sec_con > .main > .main-container > .main-left > p').first().appendTo($mainLeft);
  //   $mainLeft.css({
  //     left : 0
  //   });
  // });


    $mrContainer.stop().animate({left: -456},function(){
      $('.main > .main-container > .main-right > .right-container > ul > li').first().appendTo($mrContainer);
      $mrContainer.css({
        left : 80
      });    
    });
  
  fadeMFn();
  
});


// event
const $nicContainer = $('.sec_con > .event > .nic > .nic-container > ul')
const $prev = $('a.prev');
const $next = $('a.next');

let idx = 0;

// event.next
 $next.on('click',function(evt){
  evt.preventDefault();
  
  if(idx < 1){
    idx++;
  }else{
    idx = 0;
  }
  $nicContainer.stop().animate({ left : -350 },function(){    
    $('#wrap > section > .sec_con > .event > .nic > .nic-container > ul > li').first().appendTo($nicContainer);
    $nicContainer.css({
      left : 0
    },500);
  });
 });

 // event.prev
 $prev.on('click',function(evt){
  evt.preventDefault();
  
  if(idx > 0){
    idx--;
  }else{
    idx = 1;
  }

  $nicContainer.stop().animate({ left : 350 },function(){    
    $('#wrap > section > .sec_con > .event > .nic > .nic-container > ul > li').last().prependTo($nicContainer);
    $nicContainer.css({
      left : 350
    },500);
  });
 });




  // btm
  const $fam = $('#wrap > footer > .f_btm > .company > .fam > .sony_fam > ul')
  const $fam_exp = $fam.find('ol')
 
  $fam.on('click',function(evt){
    evt.preventDefault();   
    $fam_exp.toggle();
  });


});