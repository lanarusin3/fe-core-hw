
		//1 Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита.
		var keyTrainer = {
			chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
		//2 Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
			charCount : 0,
			setCharCount(){
				var a = parseInt(prompt('Сколько символов нужно набрать пользывателю ?'));	
				this.charCount = this.checkPositiveInteger(a);			
			},
		//3 Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).
			checkPositiveInteger(a){
				if (a >= 0) {
					return a;
				}else{
					 while(a < 0) { 
					 	return this.setCharCount();
					}
				}
			},
		//4 Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами из массива chars.
			task : [],
			createTask(charCount){
				for ( let i = 0 ; i < this.charCount; i ++){	
					let random = Math.floor(Math.random() * this.chars.length);
					this.task.push(this.chars[random]);
				}
			},

		//5 Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.
			startTask(){
				let message = prompt(`Перепечатайте строку, ${this.task.join('')}`);
				this.userInput.push(message);
			},
		//6 Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.
			userInput : [],
			userErrors: 0,
			lookErrors(){
				let a = this.task.join('');
				let b = this.userInput.join('');
				let d = 0;
				let c = 0;
				if ( b.length > a.length ){
						c = b.length - a.length;
					};
				for (let i = 0; i < this.charCount; i++){
					if (a[i] !== b[i]){
					  d +=1;
					}		
				} return this.userErrors = d + c;

			},
		//7 Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
			finish(){
				if (this.userErrors === 0){
					alert("Поздравляю, вы ввели всё верно!");
				}else{
					alert(`К сожалению вы допустили ${this.userErrors} ошибок`);
				}	
			}
	
		};
		//8 вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.
	function run(){
		keyTrainer.setCharCount();
		keyTrainer.createTask();
		keyTrainer.startTask();
		keyTrainer.lookErrors();
		keyTrainer.finish();

		console.log(keyTrainer.chars);
		console.log(keyTrainer.charCount);
		console.log(keyTrainer.task);
		console.log(keyTrainer.userInput);
		console.log(keyTrainer.userErrors);
	};

	run();