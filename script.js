var base = [
    {
        title: 'Nokia',
        url: 'http://nokiaonline.com.ua/',
        icon: 'img/nokia.jpg',
        screen: 'img/big/nokia.jpg'
    },
    {
        title: 'Intertop Infobox',
        url: '#',
        icon: 'img/infobox.jpg',
        screen: 'img/big/infobox.jpg'
    },
    {
        title: 'Samsung',
        url: 'http://samsungshop.com.ua/',
        icon: 'https://pp.vk.me/c607725/v607725145/45ed/fPKDd9PyAWc.jpg',
        screen: 'img/big/samsung.jpg'
    },
    {
        title: 'Lenovo shop',
        url: 'http://shop.lenovo.ua',
        icon: 'https://pp.vk.me/c607725/v607725145/45e6/r8MPTPRymAg.jpg',
        screen: 'img/big/lenovo.jpg'
    },
    {
        title: 'Intertop.ua',
        url: 'http://intertop.ua',
        icon: 'img/infobox.jpg',
        screen: 'img/big/intertop.jpg'
    },
    {
        title: 'Protoria.ua',
        url: 'http://protoria.ua',
        icon: 'img/protoria.jpg',
        screen: 'img/big/protoria.jpg'
    },
    {
        title: 'Киноафиша',
        url: 'http://kino.ukr.net',
        icon: 'img/kino.png',
        screen: 'img/big/kinoafisha.jpg'
    },
    {
        title: 'Leo.ua мобильный сайт',
        url: 'http://m.leo.ua',
        icon: 'img/leo.png',
        screen: 'img/big/leo.jpg'
    },{
        title: 'Internetua',
        url: 'http://internetua.com',
        icon: 'img/iua.jpg',
        screen: 'img/big/iua.jpg'
    },{
        title: 'Спорт-лайф оборудование',
        url: 'http://sportlifeequipment.com',
        icon: 'img/sl.jpg',
        screen: 'img/big/sl3.jpg'
    },{
        title: 'Спорт-лайф группа компаний',
        url: 'http://sportlifegroup.com/',
        icon: 'img/sl.jpg',
        screen: 'img/big/sl2.jpg'
    },{
        title: 'Спорт-лайф',
        url: 'http://sportlife.ua/',
        icon: 'img/sl.jpg',
        screen: 'img/big/sl1.jpg'
    },{
        title: 'Бурение скважин',
        url: 'http://burenie.co.ua/',
        icon: 'img/burenie.png',
        screen: 'img/big/burenie.jpg'
    },{
        title: 'Фасады',
        url: 'http://newfasade.com.ua',
        icon: 'img/fasade.png',
        screen: 'img/big/facade.jpg'
    },{
        title: 'Koza-dereza',
        url: 'http://web.archive.org/web/20140716162707/http://kozadereza.kiev.ua/',
        icon: 'img/koza.jpg',
        screen: 'img/big/koza.jpg'
    },{
        title: 'Biztorg',
        url: 'http://biztorg.ua/',
        icon: 'img/biztorg.png',
        screen: 'img/big/biztorg.jpg'
    },{
        title: 'Promo-style',
        url: 'http://web.archive.org/web/20120126035842/http://promo-style.pro/',
        icon: 'img/promostyle.jpg',
        screen: 'img/big/promostyle.jpg'
    }
]

$(document).on('click', '.girl-list-item', function(e){
    var el = $(e.currentTarget);
    var screen = el.data('screen');
    var me = this;

    //hightlight
    $('.girl-list-item').removeClass('active');
    el.addClass('active');
    $('.pages')[0].scrollTop = 0;

    $('.page').html('<img src="'+screen+'" alt="" />');
    return false;
});

var portfolioApp = {
    load: function(){
        $('.menu').height($(window).height()-$('.header-panel').height());
        $('.pages').height($(window).height());

        _.each(base, function(site, index){
            index = (index==0) ? 'active': '';
            var tpl = '<li data-target="#about" class="withripple girl-list-item '+index+'" data-screen="'+site.screen+'">'
                +'<div class="col-xs-3">'
                +'<div class="girl-mini-photo">'
                +'  <a href="'+site.url+'"><img src="'+site.icon+'" alt="" /></a>'
                +'</div>'
                +'</div>'
                +'<div class="col-xs-9">'
                +'  <h4 class="girl-name-in-list"><a href="'+site.url+'">'+site.title+'</a></h4>'
                +'</div><div class="clearfix"></div>'
                +'</li>';

            $('.girlslist').append(tpl);
        });
    }
};

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) { event.preventDefault(); $(this).ekkoLightbox(); });

portfolioApp.load();