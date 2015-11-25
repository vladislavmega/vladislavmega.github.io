function PortfolioApp() {
    var me = this;
    me.initialize = function () {
        me.delegateEvents();
        me.loadSites();
        me.loadGa();
        me.delegateEvents();
    };

    me.loadGa = function () {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-57600343-1', 'auto');
        ga('send', 'pageview');
    };

    me.delegateEvents = function () {
        $(document).on('click', '.siteitem', function (e) {
            var $el = $(e.currentTarget),
                screen = $el.data('screen');
            $('.siteitem').removeClass('active');
            $el.addClass('active');
            $('.fullsiteWrapper').html('<img src="' + screen + '" alt="" />');
            return false;
        });
    };

    me.loadSites = function () {
        _.each(me.base, function (site, index) {
            index = (index == 0) ? 'active' : '';
            var tpl = '<li data-target="#about" class="withripple siteitem ' + index + '" data-screen="' + site.screen + '">'
                + '<div class="col-xs-3">'
                + '<div class="sitepic">'
                + '  <a href="' + site.url + '"><img src="' + site.icon + '" alt="" /></a>'
                + '</div>'
                + '</div>'
                + '<div class="col-xs-9">'
                + '  <h4 class="sitename"><a href="' + site.url + '">' + site.title + '</a></h4>'
                + '</div><div class="clearfix"></div>'
                + '</li>';

            $('.siteslist').append(tpl);
        });
    };

    me.base = [
        {
            title: 'Panasonic',
            url: 'http://panasoniconline.com.ua/',
            icon: 'img/picon.png',
            screen: 'img/big/panasonic.png'
        },
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
            title: 'Киноафиша',
            url: 'http://kino.ukr.net',
            icon: 'img/kino.png',
            screen: 'img/big/kinoafisha.jpg'
        },
        {
            title: 'Спорт-лайф оборудование',
            url: 'http://sportlifeequipment.com',
            icon: 'img/sl.jpg',
            screen: 'img/big/sl3.jpg'
        }
    ];

    me.initialize();
    return me;
}

var portfolio = new PortfolioApp();