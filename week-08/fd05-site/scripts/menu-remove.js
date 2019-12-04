$(window).resize(function(){
  var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});