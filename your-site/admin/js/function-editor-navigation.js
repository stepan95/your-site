// Кнопка показати чи сховати навігацію
document.getElementById('editor-navigation').onclick = function() {
	if (this.dataset.editornavigation == 'on') {
		this.dataset.editornavigation = 'off'
		this.innerHTML = 'Навігація вимкнена';
		document.getElementsByTagName('style')[0].innerHTML = `
			.ys-element {
				border: 0;
			}
			.ys-element:hover{
				border: 0;
			}
			.ys-element .ys-el-panel-top {
				display: none;

			}
			.ys-element .ys-add-element {
				display: none;
			}
		`;
		
	}else {
		this.dataset.editornavigation = 'on'
		this.innerHTML = 'Навігація включена';
		document.getElementsByTagName('style')[0].innerHTML = '';
	}
}
