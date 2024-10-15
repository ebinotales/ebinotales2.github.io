// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('.header');

//     console.log(header);

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100){
//             header.classList.add('Visible');
//         } else {
//             header.classList.remove('Visible');
//         }
//     })
// });

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('main');
  const mainvisual = document.querySelector('.mainvisual');

  console.log("ページ読み込み");

  // ページが読み込まれた際にヘッダーを表示するアニメーション
  setTimeout(() => {
      header.classList.add('visible');
  }, 500); // ミリ秒単位で適切な遅延時間を設定

  setTimeout(() => {
      main.classList.add('visible');
      mainvisual.classList.add('visible');
  }, 1000); // ミリ秒単位で適切な遅延時間を設定
});

$(function(){
  /*=================================================
  // カルーセル用 jQueryプラグイン「slick」
  // マニュアル：https://kenwheeler.github.io/slick/
  ===================================================*/
  $('#slider').slick({
    autoplay: false,                         // 自動再生オン
    autoplaySpeed: 3000,                    // スライドを3秒で切り替え
    arrows: false,                           // 左右の矢印を表示
    dots: true,                             // ドット（ページ送り）を表示
    slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
    centerMode: true,                       // センターモード（両端が見切れた状態になる）
    centerPadding: '13%',                   // 見切れたコンテンツの幅を18%に設定
    prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
    nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
    responsive: [              // レスポンシブの設定
      {
        breakpoint: 900,       // 900px以下の場合に適用
        settings: {
          centerMode: false    // センターモードをオフにする
        }
      }
    ]
  });
  $('#slider2').slick({
      autoplay: false,                         // 自動再生オン
      autoplaySpeed: 3000,                    // スライドを3秒で切り替え
      arrows: false,                           // 左右の矢印を表示
      dots: true,                             // ドット（ページ送り）を表示
      slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
      centerMode: false,                       // センターモード（両端が見切れた状態になる）
      centerPadding: '0%',                   // 見切れたコンテンツの幅を18%に設定
      prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
      nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
      responsive: [              // レスポンシブの設定
        {
          breakpoint: 900,       // 900px以下の場合に適用
          settings: {
            centerMode: false    // センターモードをオフにする
          }
        }
      ]
    });
});

$(document).ready(function() {
  $('.item-header').click(function() {
    // クリックされた項目の次の要素（content）を表示・非表示切り替え
    $(this).next('.details').slideToggle();
    
    // 他の項目のcontentを非表示にする
    $('.details').not($(this).next('.details')).slideUp();
  });
});

$(document).ready(function() {
$(window).scroll(function() {
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var elementPos = $('.biography').offset().top;

  if (scrollPos > elementPos - windowHeight + 130) {
  $('.biography').css('opacity', '1');
  } else {
  $('.biography').css('opacity', '0');
  }

  // console.log("あ");

  // if($(this).scrollTop() > 100){ // 例: スクロールが100pxを超えたら非表示にする
  //   $('header').addClass('hidden');
  // } else {
  //   $('header').removeClass('hidden');
  // }
});
});



window.addEventListener('scroll', () => {

const header = document.querySelector('.header');
let prevY = window.scrollY; 

console.log("sクロール");

const currentY = window.scrollY;
if ($(window).scrollTop() > 0) { 
  header.classList.add('hidden'); 
} else { 
    header.classList.remove('hidden'); 
}
// prevY = currentY; 
});