/*
Обєкт addImage додавання зображення
Для роботи потребує функцію loadImg

addImage.start(el);

*/ 
const addImage = {
	imagePanel: document.getElementById('ys-add-image-background'),
	imageBlock: document.getElementById('ys-element-image-panel-b'),
	imagePanelHeight: true,
	el: undefined,
	open(el){
		el.ondblclick = function() {
			addImage.el = el;
    		addImage.imagePanel.style.display = 'flex';
    		if (addImage.imagePanelHeight) {
    			addImage.imageBlock.style.height = addImage.imageBlock.clientHeight - addImage.imagePanel.getElementsByClassName('ys-add-element-panel-header')[0].clientHeight - 10 +'px';
    			addImage.imagePanelHeight = false;
    		}
    		document.body.style.overflow = 'hidden';
    		loadImg(addImage.imageBlock);
    	}
    	this.imageBlock.addEventListener('scroll', function() {
    		loadImg(addImage.imageBlock, this.scrollTop);
		});
	},
	close(){
		addImage.imagePanel.style.display = 'none';
		document.body.style = '';
	},
	start(el) {
		addImage.open(el);
    	for(let i = 0; document.querySelectorAll('#ys-element-image-panel-b ul li').length > i; i++){
	    	document.querySelectorAll('#ys-element-image-panel-b ul li')[i].onclick = function() {
	    		// Встановляємо зображення
	    		addImage.el.setAttribute('src', this.getElementsByTagName('img')[0].getAttribute('src'));
	    		addImage.close();
	    	}
		}
		
		this.imagePanel.getElementsByClassName('ys-close-panel')[0].onclick = function() {
			addImage.close();
		}
	} 

}