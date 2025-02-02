﻿<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>Yeb - 로그인페이지</title>
	<link rel="stylesheet" href="css/login_form.css"/>
	<script src="js/jquery-1.12.1.min.js"></script>
	<script src="js/script.js"></script>
</head>
<body>
	<div id="wrap">
		<header>
			<div id="header">
				<h1><a href="../index2.html"><img src="img/logo_text.png" alt="메인로고"/></a></h1>
			</div>
		</header>	
		<section>
			<div id="login">
				<h2><img src="../img/logo_text_mint_shadow.png" width="85" alt=""/></h2>
				<form action="login.php" method="post" class="cf">
					<p>
						<span class="user"><input type="radio" name="loginsel" id="user" checked/>이용자</span>
						<span class="lender"><input type="radio" name="loginsel" id="lender"/>시설대여자</span>
					</p>
					<input type="text" name="id" placeholder="이메일 아이디를 입력하세요."/>
					<input type="password" name="pass" placeholder="비밀번호를 입력하세요."/>
					<button type="submit" onclick="check_input()">LOGIN</button>
					<p>
						<span class="option"><input type="checkbox" name="login_option" value="로그인 상태 유지"/>로그인 상태 유지</span>
					</p>
				</form>
				<div class="sign cf">
					<a class="signup" href="member.php">회원가입</a>
					<a class="find" href="find.php">아이디 / 비밀번호 찾기</a>
				</div>
			</div>
		</section>
		<footer>
			<div class="f_login cf">
				<a href="#"><img src="img/facebook.png" alt="페이스북으로 로그인"/></a>
				<a href="#"><img src="img/naver.png" alt="네이버로 로그인"/></a>
				<a href="#"><img src="img/twitter.png" alt="트위터로 로그인"/></a>
				<a href="#"><img src="img/google.png" alt="구글로 로그인"/></a>
			</div>
		</footer>
	</div>
</body>
</html>