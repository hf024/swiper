/**
 * Created by huangfang02 on 2016/9/29.
 */
$(function(){
    //var skinSwiper = $('.swiper-container').swiper({


	var skinSwiper = new Swiper('#skin-swiper.swiper-container',{
        autoplay : 5000, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换
        speed: 100,  //滑动速度，即slider自动滑动开始到结束的时间（单位ms）
        autoplayStopOnLast: false, //如果设置为true，当切换到最后一个slide时停止自动切换（在没有设置loop的情况下）
        mode: 'vertical', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: true, //设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换。
        loopAdditionalSlides: 0, /*loop模式下会在slides前后复制若干个slide,
         前后复制的个数不会大于原总个数。
         默认为0，前后各复制1个 0,1,2 --> 2,0,1,2,0
         例：取值为1，0,1,2 --> 1,2,0,1,2,0,1
         例：取值为2或以上，0,1,2 --> 0,1,2,0,1,2,0,1,2*/
        slidesPerView: 3, /*设置slider容器能够同时显示的slides数量(carousel模式)
         另外，支持'auto'值，会根据容器container的宽度调整slides数目
         'auto'不兼容loop模式，除非你设置了loopedSlides。*/
        loopedSlides: 6, /*在loop模式下使用slidesPerview:'auto',
         还需使用该参数设置所要用到的loop个数*/
        slidesPerViewFit: true, /*只有当设置了slidesPerView为 'auto' 并且你有宽度大于container的slide时，该参数才有效。
         默认为true，slide会贴合container的边界滑动。
         设为false时，slide会按container的大小切开划分为多个slides。*/
        slidesPerGroup: 1, //在carousel mode下定义slides的数量多少为一组
        calculateHeight: false, //当值为true时，Swiper根据slides内容计算容器高度
        roundLengths: true, //值为true时，Swiper会四舍五入宽度和高度
        cssWidthAndHeight: false, /*值为true时Swiper中的container，wrapper和slides不会自动生成宽度和高度，需要你手动设定
         还可以通过设定'width'或'height'来单独取消生成宽度或高度*/
        updateOnImagesReady: true, //当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化
        watchActiveIndex: true,     /*监控活动块的索引。
         设置为true时，拖动slide会即时更新活动块的索引值。
         默认值: false ，重新初始化时更新。
         */
        visibilityFullFit: true, //如果启用，仅有“可视”的slides会最后适应容器的大小
        autoResize: true, //设置为false后，取消自适应。当窗口尺寸改变时，slide宽度不会改变。
        resizeReInit: false, //设置为true则windows改变尺寸时swiper会重新初始化
        DOMAnimation: false, //在不支持css transitions(IE7-9)的浏览器上是否使用自定义的DOM动画
        noSwiping: false, //设为true时，可以在slide上增加类名'swiper-no-swiping'，使该slide无法滑动。
        preventLinks: true, //默认为true，当slide正在被touch时swiper阻止点击链接
        initialSlide :0, //设定初始化时slide的索引

        centeredSlides: false, //默认状态下活动块居左，设定为true时，活动块会居中。
        offsetPxBefore: 0, //设定slides与wrapper左边框的偏移量（单位px）
        offsetPxAfter: 0, //设定slides与wrapper右边框的偏移量（单位px）
        offsetSlidesBefore: 0 , //设定slides与wrapper左边框的偏移个数。
        offsetSlidesAfter: 0,//设定slides与wrapper右边框的偏移个数。
        simulateTouch: 0 ,//默认为true，Swiper接受鼠标点击、拖动
        grabCursor: false, //设置为true时，鼠标覆盖Swiper时指针会变成抓手形状。
        swipeToNext: false, //设置为false可禁止向右或下滑动
        swipeToPrev: false, //设为false可禁止向左或上滑动
        mousewheelControl: true,//设置为true时，能使用鼠标滑轮控制slide滑动。

        wrapperClass: 'swiper-wrapper', //设置wrapper的css类名
        slideClass: 'swiper-slide' , //设置slide的类名

        autoplayDisableOnInteraction : false, // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                                              //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay

        watchActiveIndex: true,
        //setWrapperSize: true,
        resizeReInit: true,

        onInit:function (swiper) {
            $('.swiper-slide').mouseenter(function (e){
                var indexId = eval($(this).attr('data-index'));
                var activeIndex = $('.swiper-slide-active').eq(0).attr('data-index');
                $('.banner-slider a').each(function (i,e) {
                    $(e).removeClass('banner-active')
                });
                $('.banner-slider a').eq(indexId).addClass('banner-active');

            });

            $('.swiper-slide').mouseleave(function(e){
                var indexId = $(this).attr('data-index');
                var activeIndex = $('.swiper-slide-active').eq(0).attr('data-index');
                $('.banner-slider a').each(function (i,e) {
                    $(e).removeClass('banner-active')
                });
                $('.banner-slider a').eq(activeIndex).addClass('banner-active');
            });

        },

        onSlideChangeStart: function(swiper,even){
            var prevIndex = $('.swiper-slide-prev').eq(0).attr('data-index');
            var activeIndex = $('.swiper-slide-active').eq(0).attr('data-index');
            $('.banner-slider a').eq(prevIndex).removeClass('banner-active')
            $('.banner-slider a').eq(activeIndex).addClass('banner-active')
        }
    });

    //Smart resize
    $(window).resize(function(){
        skinSwiper.resizeFix(true);
    });

    $('.swiper-button-prev').on('click', function(e){
        e.preventDefault()
        skinSwiper.swipePrev()
    })
    $('.swiper-button-next').on('click', function(e){
        e.preventDefault()
        skinSwiper.swipeNext()
    })
});



