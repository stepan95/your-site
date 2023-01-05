/*
class ElementEditor призначений для редагування Html Розмінки

classElement приймає css class по якому орієнтужться та відрізняє елементи
buttons Приймає обєкт кнопок та зразок створення елементів
buttonsEditEl Приймає масив кнопок управлінння

Цей клас є прототипом для розширення подібних класів


Для коректної роьоти класу потрібно 
обєкт buttonPanel
функцію lastClick

а також для роботи з вікнами class Moving
*/
class ElementEditor {
	constructor(classElement, buttons = {}, buttonsEditEl = []) 
	{
		this.classElement = classElement;
		this.buttons = buttons;
		this.buttonsEditEl = buttonsEditEl;
		this.pageEditor = document.getElementById('ys-page-editor');
		this.panel = document.getElementById('ys-add-element-panel');
		this.panelName = 'Редагування елементу';
		this.elText = document.getElementsByClassName(this.classElement);
		this.buttonsText = '';
		this.selectEl = undefined;
		this.addPanel();
		this.addEditEl();
		this.start();
	}
	addEditEl()
	{
		// Формуємо html розмітку кнопок із масиву buttonsEditEl
		let classIn = '';
		for(let i = 0; this.buttonsEditEl.length > i; i++){
			this.buttonsEditEl[i][2] != '' ? classIn = 'ys-classIn' : classIn = '';
			this.buttonsText += '<div class="ys-but  '+classIn+'" data-title="'+this.buttonsEditEl[i][3]+'"><i class="icofont-'+this.buttonsEditEl[i][0]+'" '+this.buttonsEditEl[i][1]+'></i>'+this.buttonsEditEl[i][2]+'</div>';
		}
	}
	elementsPanel(el)
	{
		// Загружаємо кнопки в панель
		document.getElementById('ys-element-panel-b').innerHTML = this.buttonsText;

		// Показуємо панель
		this.panel.style.display = 'block';
		if (el.classList[1] != 'last-click') {
			this.panel.style.left = '20%';
			this.panel.style.transition = 'all 1s';
			this.panel.style.top = (el.offsetTop-this.panel.offsetHeight)+'px';
			this.panel.getElementsByClassName('ys-add-element-panel-header')[0].getElementsByTagName('h3')[0].innerText = this.panelName;
		}
		lastClick(el);
		
		// Закриваємо панель
		const edit = this;
		this.panel.getElementsByClassName('ys-close-panel')[0].onclick = function() {
			edit.panel.style.display = 'none';
		}
	}
	addPanel() 
	{
		return buttonPanel = Object.assign(buttonPanel, this.buttons);
	}
	click(el, edit){
		console.log(el);
	}
	start(){
		const edit = this;
		document.addEventListener('click', function(event) {
			let position = event.path[0];
			for(let i = 0; 2 > i; i++){
				if (position.classList[0] == edit.classElement) {
					edit.click(event.path[0], edit);
					break;
				}
				position = position.parentElement;
			}
			
		});
	}
}



