/*
class MenuEditor

Приймає level 1 - 3 рівнів
Потрібно описувати elHtmlArra

Працює на основі
function-last-click.js
function-has-class.js

class-moving.js
class-element-moving.js


*/
class MenuEditor {
	constructor(level = 2, elHtmlArra = []) {
		this.menu = document.getElementById('ys-menu-editor');
		this.addMenu = document.getElementById('ys-add-menu').getElementsByClassName('ys-p-icon');
		this.item = this.menu.querySelectorAll('.menu-item');

		this.level = level;
		this.addEl = 'page';
	}
	addItem() {
		// Створення нового елементу

		// Управляє переключателем та записує у позиуію this.addEl
		let menu = this;
		for(let i = 0; this.addMenu.length > i; i++) {
			this.addMenu[i].style.background = 'none';
			this.addMenu[i].onclick = function() {
				for(let s = 0; menu.addMenu.length > s; s++) menu.addMenu[s].style.background = 'none';

				this.style.background = 'var(--ys-blue-light)';
				menu.addEl = this.style.background == menu.addMenu[0].style.background ? 'page' : 'url';
			}
		}
		this.addMenu[0].style.background = 'var(--ys-blue-light)';

		// Шаблони елементів меню
		const templateElPage =`
			<li class="menu-item ys-element" data-level="1">
				<i class="icofont-close-circled ys-close-panel"></i>
				<select>
					<option>Про нас</option>
					<option>Продукти</option>
					<option>Галарея</option>
					<option>Портфоліо</option>
					<option>Контакти</option>
					<option>Пункт 1</option>
					<option>Пункт 2</option>
					<option>Пункт 3</option>
					<option>Пункт 4</option>
					<option>Пункт 5</option>
				</select>
			</li>
		`;
		const templateElUrl =`
			<li class="menu-item ys-element" data-level="1">
				<i class="icofont-close-circled ys-close-panel"></i>
				<input type="text" name="" placeholder="Назва">
				<input type="url" name="" placeholder="Url">
			</li>
		`;

		// Створення елеиентів
		this.menu.getElementsByClassName('ys-add-element')[0].onclick = function() {
			if (menu.addEl == 'page')
				this.insertAdjacentHTML('afterend', templateElPage);
			else 
				this.insertAdjacentHTML('afterend', templateElUrl);
				
			menu.movingItem(this.nextElementSibling);
			menu.levelMenu(this.nextElementSibling);	
			menu.deleteItem(this.nextElementSibling);
		}

	}
	movingItem(el) {
		// Переміщення елементів мння
		new ElementMoving(el, false);
		el.addEventListener('click', function() {
			lastClick(this);
		});
	}
	deleteItem(el) {
		// Видалення елементів меню
		el.getElementsByClassName('ys-close-panel')[0].onclick = function(){
			this.parentElement.remove();
		}
	}
	levelMenu(el) {
		// Управління рівнями при кліку 
		const level = this.level;
		el.ondblclick = function() {
			if (this.dataset.level == 1 && !hasClass(this.previousElementSibling, 'ys-add-element') && level >= 2) {
				// другий рівень
				this.classList.add("level-two");
				this.dataset.level = 2;
			}else if (this.dataset.level == 2 && this.previousElementSibling.dataset.level > 1 && level >= 3){
				// третій рівень
				this.classList.remove("level-two");
				this.classList.add("level-three");
				this.dataset.level = 3;
			}else if (hasClass(this.nextElementSibling, 'level-three')){
				// другий рівень після третього
				this.classList.remove("level-three");
				this.classList.add("level-two");
				this.dataset.level = 2;
			}else {
				// інакше перший
				this.classList.remove("level-two");
				this.classList.remove("level-three");
				this.dataset.level = 1;
			}
		}
	}
	navigation() {
		this.menu.oncontextmenu = function () {
		   return false;
		};
		// Корегуємо рівні при перенесенні
		this.menu.addEventListener('contextmenu', function(e) {
			let item = this.querySelectorAll('.menu-item');
			let level = 1;
			for(let i = 0; item.length > i; i++) {
				if (level == 1 && item[i].dataset.level == 3) {
					item[i].classList.remove("level-three");
					item[i].classList.add("level-two");
					item[i].dataset.level = 2;
				}
				level = item[i].dataset.level;
			}
		});
		
		// Запускаємо навігацію
		for(let i = 0; this.item.length > i; i++){
			this.movingItem(this.item[i]);
			this.levelMenu(this.item[i]);	
			this.deleteItem(this.item[i]);
		}
		this.addItem();
	}
}