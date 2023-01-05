/*


*/
class BlocEditor extends  ElementEditor {
	constructor (classElement, buttonsEditEl, buttons = {}) {
		super(classElement, buttons, buttonsEditEl);
		this.panelName = 'Редагування блоку';
	}
	click(el, edit) {
		if (el.classList[0] == edit.classElement) {
    		edit.elementsPanel(el);
    		edit.selectEl = el.nextElementSibling;
    		document.getElementById('ys-padding').value = el.style.padding;
    		document.getElementById('ys-border-radius').value = el.style.borderRadius;
    	}

    	
    	// for(let i = 0; document.getElementsByClassName('ys-but').length > i; i++){
    	// 	document.getElementsByClassName('ys-but')[i].onclick = function(){
	    // 		if (this.classList[1] != 'ys-classIn') {
	    // 			let elb = this.getElementsByTagName('i')[0];
	    // 			if (elb.dataset.textalign != undefined) {
		// 	    		edit.selectEl.style.textAlign = elb.dataset.textalign;
		// 	    	}
		// 	    	if (elb.dataset.fontweight != undefined) {
		// 	    		edit.selectEl.style.fontWeight == 'bold' ? edit.selectEl.style.fontWeight = 'normal' : edit.selectEl.style.fontWeight = 'bold';
		// 	    	}
		// 	    	if (elb.dataset.fontstyle != undefined) {
		// 	    		edit.selectEl.style.fontStyle == 'italic' ? edit.selectEl.style.fontStyle = 'normal' : edit.selectEl.style.fontStyle = 'italic';
		// 	    	}
	    // 		}
	    // 	}
    	// }
    	
    	
    	
    	if (document.getElementById('ys-background') != null) {
			document.getElementById('ys-background').oninput = function() {
				console.log(edit.selectEl)
			    edit.selectEl.style.background = document.getElementById('ys-background').value;
			}
			document.getElementById('ys-color').oninput = function() {
			    edit.selectEl.style.color = document.getElementById('ys-color').value;
			}
			document.getElementById('ys-padding').oninput = function() {
			    edit.selectEl.style.padding = document.getElementById('ys-padding').value;
			}
			document.getElementById('ys-border-radius').oninput = function() {
			    edit.selectEl.style.borderRadius = document.getElementById('ys-border-radius').value;
			}
		}
	}
}