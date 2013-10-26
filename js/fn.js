//Переменные конфига
var document_height = 0;


//различные RDY фции
$(document).ready(function(){
	//Увалим скрулы
    
    normalizeSize();
    $(window).resize(function(){
        normalizeSize();
    });
	$('div#show_site .close').click(function(){
		$('div#show_site').fadeOut("slow");
	});
	
	$('#start_layer .grid > div > a.f').click(function(){
		createFrame($(this).attr('href'));
		$('div#show_site .description').html($(this).attr('rel'));
		$('.url').html('<a href="'+$(this).attr('href')+'" target="blank">'+$(this).attr('href')+'</a>');
		return false;
	});
	//Делаем выезжайку при старте
	$('.grids').css({'display':'block'});
	$('.grids').animate({'left': '0'}, function (){
        $('.logo, .userlogin').animate({'opacity': '1'}, "fast");
	  	$('.grid>div').each(function(){
            $(this).animate({"opacity": "1"}, {queue: false});
        });
	});
});

function createFrame(site) {
   c1 = '<iframe src="'+site+'" width="'+$(document).width()*0.9+'" height="'+$(document).height()*0.8+'" scrolling="yes"></iframe>';
   console.log(c1);
   $('div#show_site #framewrapper').html(c1);
   $('div#show_site').fadeIn("slow");
}

function normalizeSize(){
//    $('#start_layer .grid.first').css({'margin-left': ($(document).width()-957)/2});
    $('#show_site').css({'margin-left' : ($(document).width()*0.1)/2+'px'});
    $('#start_layer .logo').css({'margin-top':($(document).height()-480)/2+'px'})
}