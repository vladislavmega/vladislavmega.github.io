// ==UserScript==
// @name {Userscript Name}
// @namespace {deine Webseite?!}
// @author {Dein Name}
// @description {Userscript Beschreibung}
// @include *
// Wenn dein Userscript auf allen Seiten ausgefuhrt werden soll: *
// Bei einem Include, kannst du auch mehrere * als Wildcard nutzen
// um es als regularen Ausdruck zu verwenden,
// allerdings muss dann der gesamte Ausdruck passen!
// zum Beispiel: *.beliebige-webseite.de*
// Ansonsten muss es so aussehen: www.beliebige-webseite.de
// @info {weitere Informationen ...}
// @grant {erbitte Zugriff auf extra Funktionen}
// @updateURL {wenn die Versionsnummer verschieden ist,
// USI dein Userscript aktualisieren}
// @run-at document-end 
// @include-jquery true
// @version 1.0.0
// ==/UserScript==
console.log('iwork');
console.log(document, location);
setTimeout(function(){
  //do work
	if ( location.href.match('android.bilink.tv/authorization.php')!==null ) {
	  $('#login').val('6024485')
	  $('#pass').val('7519133');
	  $('button[type=submit]').click();
	}
	$.ajaxSetup({
	  complete: function () {
	    countAjaxSuccess++;
	    if (countAjaxSuccess == 2) {
	      Init();
	    }
	  }
	});
},10000)

var currentFocus = {
};
var countAjaxSuccess = 0;


function Init() {
  $('body').append('<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/vladislavmega/vladislavmega.github.io/master/tv/tv.css" />');
  $('select#select-category option:visible').each(function () {
    $option = $(this);
    currentFocus[$(this).val()] = 0;
  });
  
  $(document).on('keyup', function(e){
    e.preventDefault();
    var code = e.keyCode;  
    if (code==40) {
      changeFocus(1);
    }
    
    if (code==38) {
      changeFocus(-1);
    }
    
    if (code==37) {
      changeCat(-1);
    }
      
    if (code==39) {
      changeCat(1);
    }
  }); 
  
  changeFocus();
}

function changeCat (direction) {
   var currentCatIndex = parseInt($('select#select-category:visible').val());
   var newCat = currentCatIndex+direction;
   var lastCatIndex = parseInt( $('select#select-category option:visible:last-child').val() );
   
   if (direction==-1 && currentCatIndex==0) {
     newCat = lastCatIndex;
   }
  
   if (direction==1 && lastCatIndex==currentCatIndex) {
     newCat = 0;
   }
  
   $('select#select-category:visible').val(newCat);
  
  $('select#select-category:visible').trigger('change');
  changeFocus();
}

function changeFocus(direction){
  direction = direction || 0;
  var newFocusIndex = currentFocus[ $('select#select-category:visible').val()]+direction;
  var newFocusElement = $('.ui-link-inherit:visible').eq(newFocusIndex);
  if (newFocusElement.length==0){
     if (newFocusIndex==-1) {
        newFocusIndex = $('.ui-link-inherit:visible').length-1;
        currentFocus[ $('select#select-category:visible').val()] = newFocusIndex;
        newFocusElement = $('.ui-link-inherit:visible').eq(newFocusIndex);
     } else {
        newFocusIndex = 0;
        currentFocus[ $('select#select-category:visible').val()] = 0;
        newFocusElement = $('.ui-link-inherit:visible').eq(0);
     }
  } else {
     currentFocus[ $('select#select-category').val()] = newFocusIndex;
  }
  
  newFocusElement.focus();
  
 // window.scroll(0,findPos(document.getElementById("yourSpecificElementId")));
}


function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}