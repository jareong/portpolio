//로딩중(애니큐빅)
$(function() {
    const $loading = $('.loading');
    $loading.children('p').fadeOut();
    $loading.delay(350).fadeOut(800);
 });

 //인트로, 네비게이션
$(function() {
   const $header = $('header');
   const $nav = $header.find('nav');
   const $btnGnb = $header.find('.btn-gnb');

   //처음 로딩과 브라우저창 크기를 줄였을때 설정
   $(window).on('load resize', function() {     
      //가로폭 크기 기준
      if ($(window).width() > 640) {   
         $nav.show();
      } else {
         //모바일
         $btnGnb.removeClass('clse');
         $nav.hide();
      }
   });
   //햄버거버튼
   $btnGnb.on('click', function() {
      $(this).toggleClass('clse');
      $nav.toggle();
   });
  
});

// ability
$(function(){
   $("#ability").on("inview", function(evt, visible){
      
      if(visible==true){
         
         $('.chart').easyPieChart({
            //your configuration goes here
            easing: 'easeInOutCubic',
            delay: 3000,           
            barColor:'#fff', 
            trackColor:'rgba(255,255,255,0.2)',
            scaleColor: false,
            lineWidth: 8,
            size: 140,
            animate: 2000,
            onStep: function(from, to, percent) {
               this.el.children[0].innerHTML = Math.round(percent);
            }
         });         
      }      
   });
   
});

// skills
$(function(){
   $("#skills").on("inview", function(evt, visible){
      if(visible==true){        

         for(var i=0;i<=5;i++){
            var $that = $("#skills .bar").eq(i);
            $that.css({
               "width" : $that.parent().attr("data-bar")+"%"
            });
         }
      }
   });   
   
   $(window).on("scroll", function(){
      if($(this).scrollTop() < $("#skills").offset().top-$(this).height()){         
         $("#skills .bar").width(0);
      }
   });
});

// portpolio
$(function(){
   const $visual = $('#portfolio > .work > .visual');
   const $indicator = $('#portfolio > .work > .visual_pagination > li > a');
   const $btnNext = $('#portfolio >.work > .next');
   const $btnPrev = $('#portfolio > .work > .prev');

   let nowIdx = 0;
    let oldIdx = nowIdx;

   $visual.eq(nowIdx).show();
   // $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

   function fadeFn(){
      $visual.eq(oldIdx).stop().fadeOut(1000);
      $visual.eq(nowIdx).stop().fadeIn(1000);
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
   };

   $indicator.on('click',function(evt){
      evt.preventDefault();

      oldIdx = nowIdx;
      nowIdx = $indicator.index(this);

      fadeFn();
   });

   $btnNext.on('click',function(evt){
      evt.preventDefault();  
      
      oldIdx = nowIdx;

      if(nowIdx<$indicator.length-1){
			nowIdx++;
		}else{
			nowIdx = 0;
		}
      fadeFn();
   });

   $btnPrev.on('click', function(evt){
      evt.preventDefault();

      oldIdx = nowIdx;
      
      if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx = $indicator.length-1;
		}
      
      fadeFn();
});

});

// extra
$(function(){
   const $porto = $('#extra>.fun>.travel>h4');
   const $portoCon = $('#extra>.fun>.travel>.extra_container');
   const $btnProc = $portoCon.find('.proc');
   const $btnUp = $portoCon.find('.up');
   const $shadow = $portoCon.find('.shadow');
   const $lightbox = $portoCon.find('.lightbox');
   const $btnClse = $portoCon.find('.clse');
   
   $portoCon.stop().slideUp()

   $porto.on('click',function(){
      $portoCon.stop().slideDown(2000)      
   });
   
   $btnUp.on('click',function(evt){
      evt.preventDefault();
      $portoCon.stop().slideUp(2000)
   })

 $btnProc.on('click', function(evt){
     evt.preventDefault();
     $shadow.show().eq(nowIdx).show();   
 });

 $btnClse.on('click', function(){
     $shadow.hide();   
 });
 
 $shadow.on('click', function(){
     $shadow.hide();
 });
 
 $lightbox.on('click', function(evt){
     evt.stopPropagation();
 });
 
 $(document).on('keyup', function(evt){
     console.log('현재 눌린 키의 번호는 '+ evt.which);
     if(evt.which=='27'){
         $shadow.hide();
     }
 });
});




//원페이지 스크롤
$(function(){
   
   const $header = $("header");
   const $home = $('#home')
   const headerH = $header.outerHeight();//헤더의 높이(보더,패딩 포함해서 측정)
  

  const $mnu = $('header>.header_container>nav>.gnb>li>a');//6개의 메뉴셀렉팅
   let idx = 0;//현재 선택된 메뉴의 인덱스

   let arrTopVal = [];//header이후에 나타나는 section의 top값

   
   // 함수는 반복되는 코드를 많들어 놓고 사용하면 코드의 재활용 측면에서 유용하게 사용 가능
   function pageAni(topVal){
       $('html, body').stop().animate({scrollTop:topVal});
   }

   //load 이벤트는 컨텐츠가 페이지에 노출된 시점에 딱 한번 일어남
   //resize 이벤트는 브라우저의 크기가 바뀌면 일어남
   $(window).on('load resize', function(){

       console.log("현재 메뉴의 개수 : "+$mnu.size());
       
       //어떤 요소의 top값(문서/브라우저/body로부터의 거리)를 구하는 방법 -> .offset().top
       //각 section의 top값을 자동으로 계산하는 장점
       //반복문을 이용한 처리
       for(let i=0;i<$mnu.size();i++){
           arrTopVal[i] = $("header~section").eq(i).offset().top;
       }
       
   });
  
  const $btnGnb = $header.find('.btn-gnb');

   $mnu.on('click', function(evt){
       //이번에 클릭한 요소의 index번호
       idx = $mnu.index(this);//0~5
       pageAni(arrTopVal[idx]);
       evt.preventDefault();

     if($(window).width()<=640){
        $btnGnb.trigger("click");
     }
   });


   $(window).on('scroll', function(){

       let scrollTop = $(this).scrollTop();
       console.log("scrollTop = ",scrollTop);


     
       for(let i=0;i<$mnu.size();i++){
           if(scrollTop>=arrTopVal[i]-headerH-200){//fixed한 헤더의 높이값
               $mnu.eq(i).parent().addClass('on');
               $mnu.eq(i).parent().siblings().removeClass('on');
           }else if(scrollTop<arrTopVal[0]){//비주얼 슬라이드 구간
               $mnu.parent().removeClass('on');
           }
       }     
          });

   
   $(".logo").on('click', function(evt){
       evt.preventDefault();
       pageAni(0);
   });

  
 
   $(window).on('load', function(){
       pageAni(0);
   });




});