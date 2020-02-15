<!DOCTYPE HTML>
<html lang="ru">
<head>
	<title>Тестовое задание</title>
   <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link href="css/style.css" type="text/css" rel="stylesheet">
</head>

<body>
<main>
	
	<form name="form" action="https://digital-spectr.com/ac/academy.php" method="POST">
		<h1>Задать вопрос</h1>
		<input name="name" type="text" required placeholder="Фамиля Имя Отчество *">
		<input name="phone" type="text" required placeholder="Телефон *">
		<input name="email" type="text" placeholder="Email">
	
		<button type="button" id="buttonForm">ОТПРАВИТЬ ЗАПРОС</button>
	</form>

</main>


</body>

<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/jsfile.js"></script>

</html>