/*


*/
class ElementMoving  extends Moving {
	constructor(windowPanrl, panel = true, position = 'fixed')
	{
		super(windowPanrl, panel, position);
		this.memory = document.getElementById('ys-memory');
		this.panelNeighbor = undefined;
		this.start();
	}
	pressed(mov, e)	// Момент нажата ліва кнопка
	{
		if (this.memory.getElementsByClassName('ys-element').length == 0) {
			let panel = this.panel == true ? this.windowPanrl.parentElement : this.windowPanrl;
			this.panelNeighbor = panel.previousElementSibling;
			this.memory.append(panel);
			panel.style.width = panel.clientWidth+'px';
			panel.style.margin = '0px';
			if (this.panel) panel.style.height = panel.clientHeight+'px';
			panel.style.zIndex = 1;

			this.downY = this.panel == true ? panel.querySelector('.ys-el-panel-top').offsetHeight /2 : panel.offsetHeight /2;
			this.downX = e.layerX;

			this.panelNeighbor.classList.add("insertion-zone");
			
			document.onmousemove = function(e) {
				if (mov.panel == true) {
					let el = document.elementFromPoint(e.clientX, e.clientY - panel.querySelector('.ys-el-panel-top').offsetHeight+5 /2);
					if (el != undefined) {				
						if (el.parentElement != undefined) {
							let position = el;
							for(let i = 0; 10 > i; i++){
								if (position != undefined) {
									if (position.classList[0] == 'ys-element'&& position.parentElement.classList[0] == 'ys-page-editor') {
										mov.panelNeighbor.classList.remove("insertion-zone");
										mov.panelNeighbor = position;
										mov.panelNeighbor.classList.add("insertion-zone");
										break;
									}
									position = position.parentElement;
								}else {
									break;
								}
							}
						}
					}
				}else {
					let el = document.elementFromPoint(e.clientX, e.clientY - panel.offsetHeight+5 /2);
					if (el != undefined) {				
						let position = el;
						if (position != undefined) {
							if (position.classList[1] == 'ys-element') {
								mov.panelNeighbor.classList.remove("insertion-zone");
								mov.panelNeighbor = position;
								mov.panelNeighbor.classList.add("insertion-zone");
							}
						}
					}
				}
				
				mov.move(e);
			}

			this.released(mov, panel);
		}
	}
	released(mov, panel)	// Момент відпущена ліва кнопка
	{
		this.windowPanrl.onmouseup = function() {
		    document.onmousemove = null;
		    mov.windowPanrl.onmouseup = null;
		    panel.style = '';
		    mov.panelNeighbor.classList.remove("insertion-zone");
		    mov.panelNeighbor.after(panel);
		}
		document.ondragstart = function() {
		  	return false;
		}

	}
	start() 
	{
		const mov = this;
		this.windowPanrl.onmousedown = function(e) {
			if (e.buttons == 2) {
				mov.pressed(mov, e);
			}
		}
	}
}