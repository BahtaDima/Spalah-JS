var name;
var age;
var endFunkWork;
function userQuetions(){
		
		name = name || prompt('Введите ваше имя');
		age = age || prompt('Введите ваш возрост');

	endFunkWork = confirm('Вы закончили работу с программой ?');
	if(endFunkWork){
		alert('Рабата завершина')
	}else {
		userQuetions();
	};
};
userQuetions();