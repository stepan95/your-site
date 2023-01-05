/*


*/
class TextEditor extends  ElementEditor {
	constructor (classElement, buttons, buttonsEditEl) {
		super(classElement, buttons, buttonsEditEl);
	}
	click(el, edit) {
		if (el.classList[0] == edit.classElement) {
    		edit.elementsPanel(el);
    		el.setAttribute('contenteditable', 'true' );
    		edit.selectEl = el;
    		document.getElementById('ys-font-size').value = el.style.fontSize;
    		document.getElementById('ys-padding').value = el.style.padding;
    		
    		if (el.localName == 'ol' || el.localName == 'ul') {
    			if (el.getElementsByTagName('li').length == 0) {
    				el.innerHTML = '<li>'+el.outerText+'</li>';
    			}
    		}
    	}
    	if (el.parentElement.classList[0] == edit.classElement) {
    		edit.elementsPanel(el.parentElement);
    		edit.selectEl = el.parentElement;
    	}
    	
    	for(let i = 0; document.getElementsByClassName('ys-but').length > i; i++){
    		document.getElementsByClassName('ys-but')[i].onclick = function(){
	    		if (this.classList[1] != 'ys-classIn') {
	    			let elb = this.getElementsByTagName('i')[0];
	    			if (elb.dataset.textalign != undefined) {
			    		edit.selectEl.style.textAlign = elb.dataset.textalign;
			    	}
			    	if (elb.dataset.fontweight != undefined) {
			    		edit.selectEl.style.fontWeight == 'bold' ? edit.selectEl.style.fontWeight = 'normal' : edit.selectEl.style.fontWeight = 'bold';
			    	}
			    	if (elb.dataset.fontstyle != undefined) {
			    		edit.selectEl.style.fontStyle == 'italic' ? edit.selectEl.style.fontStyle = 'normal' : edit.selectEl.style.fontStyle = 'italic';
			    	}
	    		}
	    	}
    	}
    	
    	
    	
    	if (document.getElementById('ys-color') != null) {
	    	document.getElementById('ys-color').oninput = function() {
			    edit.selectEl.style.color = document.getElementById('ys-color').value;
			}
			document.getElementById('ys-background').oninput = function() {
			    edit.selectEl.style.background = document.getElementById('ys-background').value;
			}
			document.getElementById('ys-font-size').oninput = function() {
			    edit.selectEl.style.fontSize = document.getElementById('ys-font-size').value;
			}
			document.getElementById('ys-padding').oninput = function() {
			    edit.selectEl.style.padding = document.getElementById('ys-padding').value;
			}
		}
	}
}