$(function(){
	/*----- slide -----*/
	var slide = $('.slide_img > img');
	var btn = $('.slide_control > span');
	var current = 0;
	setInterval(function(){
		var prev = slide.eq(current);
		var btncur = btn.eq(current);
		current++;
		move(prev, '0%', '-100%');
		btncur.removeClass('on');
		if(current==slide.size()){current=0;};
		var next = slide.eq(current);
		var btncurr = btn.eq(current);
		move(next, '100%', '0%');
		btncurr.addClass('on');
	}, 2500);
		
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left: end});
	}
	
	var btn = $('.slide_control > span');
	btn.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			btn.removeClass('on');
			tg.addClass('on');
			move1(i);
		}
	});
	
	function move1(i){
		if(current==i) return;
		var currentEl = slide.eq(current);
		var nextEl = slide.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:'0%'},500);
		current=i;
	};
	
	/*----- content3 -----*/
	var tab = $('.reserv_date>li');
	var content = $('form>div');
	content.hide();
	content.eq(0).show();
	tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block');
	});
	
	/*----- content4 -----*/
});




