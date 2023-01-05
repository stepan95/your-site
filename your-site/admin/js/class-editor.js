/*
class Editor призначений для редагування Html Розмінки

elementsHtml Приймає Html в масиві та повертає масив після редагування (повенення масиву ще не опрацьовано). 
getButtonPanel Приймає обєкт кнопок управлінння
*/
class Editor {
	constructor(elementsHtml, getButtonPanel = {}){
		this.pageEditor = document.getElementById('ys-page-editor');
		this.panel = document.getElementById('ys-add-element-panel');
		this.elementsHtml = elementsHtml;
		this.getButtonPanel = getButtonPanel;
		

		// Дежурні властивості
		this.addButtonId = 1;
		this.onclickButtonId = 1;
		this.elementsId = 1;
		this.onclickElementsId = 1;

		// Кнопки управління за стандарртом
		this.buttonPanelArray = {
      'ys-button-bloc-1' : ['Блок','layout', ['<div class="ys-bloc"><div>', '<h3 class="ys-text">Текст</h3>']],
      'ys-button-bloc-2' : ['Дві<br>колонки','layout', ['<div class="ys-bloc"><div>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>']],
      'ys-button-bloc-3' : ['Три<br>колонки','layout', ['<div class="ys-bloc"><div>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>']],
      'ys-button-bloc-4' : ['Чотири<br>колонки','layout', ['<div class="ys-bloc"><div>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>', '<h3 class="ys-text">Текст</h3>']],
    };
    this.buttonPanelLevel1 = '';
    this.buttonPanelLevel2 = '';
 	}
	addButtonNew(){
		// Кнопка додати з унікальним id
    return `
	    <div class="ys-add-element" id="ys-add-`+this.addButtonId+++`">
	    	<i class="icofont-plus-circle"></i><span></span>
	    </div>
    `;
	}
	onclickNewButton() {
		const edit = this;
		// Запускаємо дію до нових кнопок 
		for(let i = this.onclickButtonId; this.addButtonId > i; i++){
			document.getElementById('ys-add-'+i).onclick = function() {
				if (this.parentElement.classList[0] == 'ys-element') {
					edit.elementsPanel(this.parentElement);
				}else {
					edit.elementsPanel(this);
				}
				lastClick(this);
			}
			this.onclickButtonId++;
		}
	}
	onclickDeleteElement(){
		const edit = this;
		// Запускаємо дію до нових кнопок видалити елемент
		for(let i = this.onclickElementsId; this.elementsId > i; i++){
			document.getElementById('ys-el-'+i).getElementsByClassName('ys-close-panel')[0].onclick = function() {
				this.parentElement.parentElement.remove();
				edit.panel.style.display = 'none';
			}
			this.onclickElementsId++;
		}
	}
	elementsPanel(el){
		// Панель з кнопками елементів

		this.panel.style.display = 'block';
		if (el.classList[1] != 'last-click') {
			// Оприділяємо кординати та показуємо панель
			this.panel.style.left = '20%';
			this.panel.style.transition = 'all 1s';
			this.panel.style.top = el.offsetTop+el.offsetHeight+'px';
			this.panel.getElementsByClassName('ys-add-element-panel-header')[0].getElementsByTagName('h3')[0].innerText = 'Елементи';
		}
		

		const edit = this;
		// Закриваємо панель
		this.panel.getElementsByClassName('ys-close-panel')[0].onclick = function() {
			edit.panel.style.display = 'none';
		}

		// Загружаємо доступні кнопки в панель відповідно до рівня панелі 
		const elPanel = document.getElementById('ys-element-panel-b');
		if (el.parentElement.classList[0] == 'ys-page-editor') 
			elPanel.innerHTML = this.buttonPanelLevel1;
		else 
			elPanel.innerHTML = this.buttonPanelLevel2;
		

		// Створюємо новий елемент управління при виборі відповідної кнопки на панелі
		const bPanel = elPanel.getElementsByClassName('ys-p-icon');
		for(let i = 0; bPanel.length > i; i++){
			bPanel[i].onclick = function() {
				for (let key in edit.buttonPanelArray) {
					if (this.id == key) {
						el.insertAdjacentHTML('afterend', edit.addElementHtml( edit.buttonPanelArray[key][2] ));
					}
				}
				edit.panel.style.display = 'none';
				// Назначаємо дію до кнопки додати
				edit.onclickNewButton();
				// Назначаємо дію до кнопки видалити
				edit.onclickDeleteElement();
			}
		}
	}
	buttonPanel(){
		// Формуємо рівні для панелі на основі переданого обєкту
    let buttonPanel = '';
    for (let key in this.buttonPanelArray) {
      buttonPanel = `
        <li class="ys-p-icon" id="`+key+`"><a onclick="return false;">
          <i class="icofont-`+this.buttonPanelArray[key][1]+` ys-p-ico"></i>
          <p class="ys-p-name">`+this.buttonPanelArray[key][0]+`</p>
        </a></li>
      `;
      this.buttonPanelLevel1 += buttonPanel;
      if (key.slice(0, -2) != 'ys-button-bloc') {
        this.buttonPanelLevel2 += buttonPanel;
      }
    }

  }
	templateElementHtml(html, divClass = 'ys-html-el') {
		// Шаблон навігатора
		let bloc = '', mame = 'Елемент';
		if (divClass != 'ys-html-el') {
			bloc = 'ys-panel-bloc-nested';
			mame = 'Блок'
		}
	  const element = ` 
	  <div class="ys-element ys-edit" id="ys-el-`+this.elementsId+++`">
			<div class="`+bloc+` ys-el-panel-top">
				<p>`+mame+`</p>
				<i class="icofont-close-circled ys-p-ico ys-close-panel"></i>
			</div>
			<div class="`+divClass+`">
			`+html+`
			</div>
			`+this.addButtonNew()+`
		</div>
	  `;
	  return element;  
	}
	addElementHtml(html) {
		// Формуємо навігацію з елементами по шаьлоні
		let element = '';
		if (html.length <= 1) {
			element = this.templateElementHtml(html);
		}else {
			for(let i = 1; html.length > i; i++){
				element += '<div>'+this.addButtonNew()+this.templateElementHtml(html[i])+'</div>';
			} 
			element = this.templateElementHtml(element, 'ys-bloc');
		}
		return element;
	}
	addElementStart(){
		// Запускаємо та формуємо сторінку редагування по масиву переданому в обєкт
		for(let i = 0; this.elementsHtml.length > i; i++){
			this.pageEditor.insertAdjacentHTML('beforeend', this.addElementHtml(this.elementsHtml[i]));
			// Назначаємо дію до кнопки додати
			this.onclickNewButton();
			// Назначаємо дію до кнопки видалити
			this.onclickDeleteElement();
		}	
		
	}
	start(){
		this.buttonPanelArray = Object.assign(this.getButtonPanel, this.buttonPanelArray);
		this.buttonPanel();
		this.pageEditor.insertAdjacentHTML('afterbegin', this.addButtonNew());
		this.addElementStart();
	};
}


// логіка ще не створена Буду створювати на основі класу text edinor ще не обдумував
// let buttonPanel = {
//   'ys-button-gallery' : ['Галарея','infinite', '<img src="">'],
// }



    
