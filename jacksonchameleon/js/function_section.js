$(function() {
  // 슬라이드
  const $visual = $('section > .visual > .visual_slides');
  const $indicator = $('section > .visual > .visual_show > li > a');
  const $btnPrev = $('.visual >.prev');
  const $btnNext = $('.visual >.next');

  let intervalKey = null;
  let nowIdx = 1;

  // 자동재생
  clearInterval(intervalKey);
  intervalKey = setInterval(function() {
     $btnNext.click();
  }, 4200);

  $indicator.on('click', function(evt) {
     evt.preventDefault();

     nowIdx = $indicator.index(this) + 1;
     $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
     $visual.stop().animate({
        left: -(1660 * nowIdx) + 'px'
     });
  });

  // 이전버튼
  $btnPrev.on('click', function(evt) {
     evt.preventDefault();

     nowIdx--;
     if (nowIdx === 0) {
        nowIdx = 5;
     }

     $indicator.eq(nowIdx - 1).parent().addClass('on').siblings().removeClass('on');
     $visual.stop().animate({
        left: -(1660 * 4) + 'px'
     }, 400, function() {
        $('.visual > .visual_slides > p').last().prependTo($visual);
        $visual.css({ left: -(1660 * 5) + 'px' });
     });
  });

  //  다음 버튼
  $btnNext.on('click', function(evt) {
     evt.preventDefault();
     nowIdx++;
     if (nowIdx === 6) {
        nowIdx = 1;
     }
     $indicator.eq(nowIdx - 1).parent().addClass('on').siblings().removeClass('on');
     $visual.stop().animate({
        left: -(1660 * 6) + 'px'
     }, 400, function() {
        $('.visual > .visual_slides > p').first().appendTo($visual);
        $visual.css({ left: -(1660 * 5) + 'px' });
     });
  });

  // 섹션(mnb)
  const $chapter = $('.mnb > .mnb_container > ul.chapter');

  const $_con = $('.mnb_slides > .mnb_section > div ');

  const $mnb = $('.mnb_section');

  const $mnbPrev = $('.mnb_slides >.prev');
  const $mnbNext = $('.mnb_slides >.next');

  let chapterIdx = 0; //탭메뉴 인덱스
  let currentIdx = 0; //맨앞에 보여질 슬라이드 번호
  let lastIdx = 7; //마지막 아이템의 인덱스 번호

  // mnb(클릭시 해당카테고리로 변경)
  $chapter.children('li').on('click', function(evt) {
     chapterIdx = $(this).index();

     evt.preventDefault();
     $(this).addClass('on').siblings().removeClass('on');

     $_con.eq(chapterIdx).addClass('on').siblings().removeClass('on');

     $_con.eq(chapterIdx).find('ul').stop().css({
        left: 0
     });

     currentIdx = 0;
     lastIdx = $_con.eq(chapterIdx).find('li.img').length;
  });

  $mnbPrev.on('click', function(evt) {
     evt.preventDefault();
     if (currentIdx > 0) {
        currentIdx--;
     }

     $mnb.find('ul').stop().animate(
        {
           left: -500 * currentIdx
        },
        400
     );
  });

  $mnbNext.on('click', function(evt) {
     evt.preventDefault();
     if (currentIdx < lastIdx - 3) {
        currentIdx++;
     }

     $mnb.find('ul').stop().animate(
        {
           left: -500 * currentIdx
        },
        400
     );
  });
});