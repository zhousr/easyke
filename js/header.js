$(function () {
  // 初始化
  $('.abs-left .abs-left-title:first').addClass('abs-left-actived')
  $('.abs-right-li:first').show()
  $('.abs-left .abs-left-title').hover(function () {
    var index = $(this).index()
    $(this).addClass('abs-left-actived').siblings().removeClass('abs-left-actived')
    $('.abs-right-li').eq(index).show().siblings().hide()
  })
})
var bannerSwiper = document.getElementsByClassName('swiper-container')
new Swiper(bannerSwiper, {
  pagination: '.swiper-pagination',
  lazyLoading: true,
  autoplay: 4000,
  onImagesReady: swiper => {
    setTimeout(() => {
      swiper.reLoop()
    }, 10)
  }
})
// 切换手机版导航条
var index10
$('.nav-li').click(function (event) {
  if (index10 === $(this).index()) {
    $(this).toggleClass('heightAuto')
  }else {
    index10 = $(this).index()
    $(this).addClass('heightAuto').siblings().removeClass('heightAuto')
  }
})

$('.nav-li>.abs').click(function (event) {
  return false
})
$('.nav-li').unbind('mouseenter').unbind('mouseleave')
// 切换手机版导航显示影藏
$('.header-btn').click(function (event) {
  $('.wapBox').toggleClass('showNav')
})
$('.wapBox-exitImg').click(function (event) {
  $('.wapBox').toggleClass('showNav')
})
$('.wapBox').on('click', function () {
  return false
})
$('.wapBox').on('touchmove', function () {
  return false
})
