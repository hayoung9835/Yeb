$(function(){
	$('#h_menu').click(function(){
		$('#sidebar').fadeIn(500);
		$('.sidebar_inner').stop(true,true).animate({'margin-left':'-206px'},500);
	});
	var sidebar_a = $('#sidebar a');
	$('#sidebar').click(function(){
		$('#sidebar').fadeOut(500);
		$('.sidebar_inner').stop(false,false).animate({'margin-left':'-457px'},500);
	});
});