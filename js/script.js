// задаём стили для body
var parentElem = document.body;
parentElem.style.cssText=" width:800px; \
	height: 600px; \
	margin: 0 auto; \
	border: 1px solid black; \
	font-size: 16px; \
	";

// вставляем первый текст
var div = document.createElement('div');
div.className = 'text';
div.innerHTML = 'Тест по прагромированию';
div.style.cssText=" width:200px; \
	margin: 0 auto; \
	padding-top: 20px;";
parentElem.appendChild( div );
//
// создаём форму
var form = document.createElement('form');
parentElem.appendChild(form);
form.style.padding = '25px 0 50px 95px';
form.style.height = '500px';

// вставляем вопрос №1
var question = document.createElement('div');
question.className = 'checkbox';
form.appendChild(question);

// текст
var ques1 = document.createElement('span');
ques1.style.display = 'block';
ques1.style.paddingBottom = '10px';
ques1.className = 'question1__span';
ques1.innerHTML = '1. Вопрос №1'
question.appendChild(ques1);

// чекбокс 1-1
var label11 = document.createElement('label');
question.appendChild(label11);
var checkbox11 = document.createElement('input');
checkbox11.setAttribute ('type', 'checkbox');
checkbox11.style.border = '1px solid black';
label11.appendChild(checkbox11);
var text = document.createTextNode ('Вариант ответа №1');
label11.appendChild(text);

// чекбокс 1-2
var label12 = document.createElement('label');
label12.style.display = 'block';
question.appendChild(label12);
var checkbox12 = document.createElement('input');
checkbox12.setAttribute ('type', 'checkbox');
label12.appendChild(checkbox12);
var text = document.createTextNode ('Вариант ответа №2');
label12.appendChild(text);

// чекбокс 1-3
var label13 = document.createElement('label');
question.appendChild(label13);
var checkbox13 = document.createElement('input');
checkbox13.setAttribute ('type', 'checkbox');
label13.appendChild(checkbox13);
var text = document.createTextNode ('Вариант ответа №3');
label13.appendChild(text);

// /вопрос №1

// вставляем вопрос №2
var question2 = document.createElement('div');
question2.className = 'checkbox';
form.appendChild(question2);
question2.style.paddingTop = '20px';

// текст
var ques2 = document.createElement('span');
ques2.style.display = 'block';
ques2.style.paddingBottom = '10px';
ques2.className = 'question2__span';
ques2.innerHTML = '2. Вопрос №2'
question2.appendChild(ques2);

// чекбокс 2-1
var label21 = document.createElement('label');
question2.appendChild(label21);
var checkbox21 = document.createElement('input');
checkbox21.setAttribute ('type', 'checkbox');
label21.appendChild(checkbox21);
var text = document.createTextNode ('Вариант ответа №1');
label21.appendChild(text);

// чекбокс 2-2
var label22 = document.createElement('label');
label22.style.display = 'block';
question2.appendChild(label22);
var checkbox22 = document.createElement('input');
checkbox22.setAttribute ('type', 'checkbox');
label22.appendChild(checkbox22);
var text = document.createTextNode ('Вариант ответа №2');
label22.appendChild(text);

// чекбокс 2-3
var label23 = document.createElement('label');
question2.appendChild(label23);
var checkbox23 = document.createElement('input');
checkbox23.setAttribute ('type', 'checkbox');
label23.appendChild(checkbox23);
var text = document.createTextNode ('Вариант ответа №3');
label23.appendChild(text);

// /вопрос №2

// вставляем вопрос №3
var question3 = document.createElement('div');
question3.className = 'checkbox';
form.appendChild(question3);
question3.style.paddingTop = '20px';

// текст
var ques3 = document.createElement('span');
ques3.style.display = 'block';
ques3.style.paddingBottom = '10px';
ques3.className = 'question1__span';
ques3.innerHTML = '3. Вопрос №3'
question3.appendChild(ques3);

// чекбокс 3-1
var label31 = document.createElement('label');
question3.appendChild(label31);
var checkbox31 = document.createElement('input');
checkbox31.setAttribute ('type', 'checkbox');
label31.appendChild(checkbox31);
var text = document.createTextNode ('Вариант ответа №1');
label31.appendChild(text);

// чекбокс 3-2
var label32 = document.createElement('label');
label32.style.display = 'block';
question3.appendChild(label32);
var checkbox32 = document.createElement('input');
checkbox32.setAttribute ('type', 'checkbox');
label32.appendChild(checkbox32);
var text = document.createTextNode ('Вариант ответа №2');
label32.appendChild(text);

// чекбокс 3-3
var label33 = document.createElement('label');
question3.appendChild(label33);
var checkbox33 = document.createElement('input');
checkbox33.setAttribute ('type', 'checkbox');
label33.appendChild(checkbox33);
var text = document.createTextNode ('Вариант ответа №3');
label33.appendChild(text);

// /вопрос №3
// вставляем конпку

var button = document.createElement('input');
button.setAttribute ('type', 'submit');
button.setAttribute ('value', 'Проверить мои результаты');
button.className = 'btn btn-default';
button.style.cssText=" width:327px; \
	height:53px; \
	border:1px solid black; \
	border-radius: 0; \
	background : #cfe2f3; \
	margin-left : 145px; \
	margin-top : 50px;";

form.appendChild( button );



// выбираем все label и двигаем вправо
var labelAll = document.querySelectorAll ('label');// выбираем все label
for (var i = 0; i < labelAll.length; i++) {
	labelAll[i].style.paddingLeft = '40px';
}
// 