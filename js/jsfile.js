"use strict";
$('input').hover(function(){	
	$('form').addClass('formBorder');
});
$('input').on('mouseout', function(){	
	$('form').removeClass('formBorder');
});

	test = /^[0-9a-zA-Zа-яА-ЯёЁ\-\.]+@[0-9a-zA-Zа-яА-ЯёЁ\-\.]+\.[a-zа-я]{2,6}$/.test(email);

// ОТправка формы
$('button#buttonForm').on('click', function(){	
	let name = $('input[name="name"]').val();
	let phone = $('input[name="phone"]').val();
	let email = $('input[name="email"]').val();
	let test = true;
	
	if ( /^[а-яА-ЯёЁ\s\-]*$/.test(name) && name.trim() != '' ) {
		test = false;
	}
	if ( /^[0-9\s\+\-]*$/.test(phone) && phone.trim() != '' ) {
		test = false;
	}
	if ( /^[0-9a-zA-Zа-яА-ЯёЁ\-\.]+@[0-9a-zA-Zа-яА-ЯёЁ\-\.]+\.[a-zа-я]{2,6}$/.test(email) && email.trim() != '' ) {
		test = false;
	}

	if (test) {
		$.ajax({
			type: "POST",
			url: "https://digital-spectr.com/ac/academy.php",
			dataType: 'json',
			data: {
				year: document.forms.form1.elements.year.value
			},
			error: function(){
				alert('ОШИБКА ОТПРАВКИ');
			},
			success: function(data){
				alert(data);
			}
		});	
	}
} );
