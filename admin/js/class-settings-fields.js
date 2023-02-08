class Fields {
	constructor(name, type, val){
		this.name = name;
		this.type = type;
		this.val = val;
	}
}
class SettingsFields {
	constructor() {
		this.settingsFields = document.getElementById('settings-fields');
		this.images();
		this.fields();
	}
	close(el){
		el.querySelectorAll('.ys-close-panel')[0].onclick = function(){
			this.parentElement.remove();
		}
	}
	fields() {
		const fields = this;
		// Шаблон поля для вставки
		const template = `	
			<div class="ys-fields-new-el">
				<input>
				<i class="icofont-close-circled ys-p-ico ys-close-panel"></i>
			</div>
		`;
		// Вставлення елементу
		const imageAdd = this.settingsFields.querySelectorAll('.ys-add-element');
		imageAdd[0].onclick = function(){
			this.insertAdjacentHTML('beforebegin', template);
			const el = this.previousElementSibling;
			const elOne = el.parentElement.querySelectorAll('[name]')[0];
			el.getElementsByTagName('input')[0].setAttribute('name', elOne.name);
			el.getElementsByTagName('input')[0].setAttribute('type', elOne.type);
			const elFields = el.parentElement.querySelectorAll('[name]');
			let n = 1;
			for(let i = 0; elFields.length > i; i++){
				elFields[i].setAttribute('placeholder', 'Поле '+n);
				n++;
			}
			fields.close(el);
		}

	}
	images(){
		const fields = this;
		// При кліку виводим обєкт з зображенями
		const image = this.settingsFields.querySelectorAll('.ys-fields-image img');
		for(let i = 0; image.length > i; i++){
			image[i].onclick = function(){
				addImage.start(this);
			}
		}

		// Шаблон зображення для вставки
		const template = `	
			<div class="ys-fields-image">
				<i class="icofont-close-circled ys-p-ico ys-close-panel"></i>
				<img src="../download/img1.jpg">
			</div>
		`;
		// Вставлення елементу
		const imageAdd = this.settingsFields.querySelectorAll('.ys-fields-image-add');
		imageAdd[0].onclick = function(){
			this.insertAdjacentHTML('beforebegin', template);
			const img = this.previousElementSibling;
			const name = img.parentElement.getElementsByTagName('img')[0].name
			img.getElementsByTagName('img')[0].setAttribute('name', name);
			addImage.start(img.getElementsByTagName('img')[0]);
			fields.close(img);
		}
	}
	get() {
		const el = this.settingsFields.querySelectorAll('[name]');
		const elFields = [];
		for(let i = 0; el.length > i; i++) {
			switch (el[i].localName) {
				case 'input':
					switch (el[i].type) {
						case 'text':
							elFields.push(new Fields(el[i].name,el[i].type,el[i].value));
							break;
						case 'checkbox':
							elFields.push(new Fields(el[i].name,el[i].type,el[i].checked));
							break;
					}
					break;
				case 'textarea':
					elFields.push(new Fields(el[i].name,el[i].localName,el[i].value));
					break;
				case 'img':
					elFields.push(new Fields(el[i].name,el[i].localName,el[i].src));
					break;
			}
		}
		return elFields;
	}
}