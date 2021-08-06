jQuery(document).ready(function(){
		
	var $messages = $('.messages-content'),
		d, h, m,
		i = 0;

		
		//chat  close 
		$('.close_chat').click(
			function(){
				$('.chat').css('display','none');
			}
		);
		
		
		
	 $(window).load(function() {
	  $messages.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage3();
		fakeMessage2();
		fakeMessage();		
	  }, 100);
	});

	function updateScrollbar() {
	  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	 
	function setDate(){
	  d = new Date()
	  if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
	  }
	}

	function insertMessage() {
	  msg = $('.message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('.mCSB_container')).addClass('new');
	  setDate();
	  $('.message-input').val(null);
	  updateScrollbar();

	  setTimeout(function() {
		fakeMessage();
	  }, 1000 + (Math.random() * 20) * 100);	  
	  
		
	  
	}

	$('.message-submit').click(function() {
	  insertMessage();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage();
		return false;
	  }
	})

	var Fake = [
		'반갑습니다~ 벙주 마이욱입니다.  (๑>ᴗ<๑)',
		'반갑습니다~ 벙주 마이욱입니다.  (๑>ᴗ<๑)',
		'반갑습니다~ 벙주 마이욱입니다.  (๑>ᴗ<๑)',
		'어디 지역분이신가요?',
		'아~ 네. 가까우시군요.',
		'혹시 급수가 어떻게 되시나요?',
		'그렇군요!',
		'참여가능하시고 19일 8시 30분까지 송파 배드민턴장으로 오시면 됩니다!',
		':)',
		':)',
		':)',
		':)'
	]	
	var Fake2 = [
	  '안녕하십니까 소범희입니다 ! ＼\ ٩( ᐛ )و /／ ',
	]

	var Fake3 = [
	  '아..안..녕하세요... 안누니라고 합니다...(,,•﹏•,,)',
	]

	function fakeMessage() {
	  if ($('.message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="images/hy.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	  updateScrollbar();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/hy.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100);

	}
			
	function fakeMessage2() {
	  if ($('.message-input').val() != '') {
		return false;
	  }
	  
	  $('<div class="message loading new"><figure class="avatar"><img src="images/cb.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	  updateScrollbar();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/cb.png" /></figure>' + Fake2[0] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100);

	}
		
	function fakeMessage3() {
	  if ($('.message-input').val() != '') {
		return false;
	  }
	  
	  $('<div class="message loading new"><figure class="avatar"><img src="images/aj.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	  updateScrollbar();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="images/aj.png" /></figure>' + Fake3[0] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100);

	}
		
});

