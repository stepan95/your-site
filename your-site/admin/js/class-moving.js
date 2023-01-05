/*


*/
class Moving {
	constructor(windowPanrl, panel = true, position = 'absolute'){
		this.windowPanrl = windowPanrl;
		this.panel = panel;
		this.position = position;
		this.downX = 0;
		this.downY = 0;
		this.start();
	}
	move(e) {
		let windowPanrl = this.windowPanrl;
		if (this.panel) windowPanrl = this.windowPanrl.parentElement;
		
		windowPanrl.style.position = this.position;
		windowPanrl.style.transition = 'all 0s';
		
		if (this.position == 'absolute') {
			windowPanrl.style.top = e.pageY - this.downY+'px';
			windowPanrl.style.left = e.pageX - this.downX+'px';
		}else {
			windowPanrl.style.top = e.clientY - this.downY+'px';
			windowPanrl.style.left = e.clientX - this.downX+'px';
		}
		
	}
	start() {
		const mov = this;
		this.windowPanrl.onmousedown = function(e) {
			mov.downX = e.layerX;
			mov.downY = e.layerY;
			document.onmousemove = function(e) {
				mov.move(e);
			}
			
			mov.windowPanrl.onmouseup = function() {
			    document.onmousemove = null;
			    mov.windowPanrl.onmouseup = null;
			}
			mov.windowPanrl.ondragstart = function() {
			  return false;
			}
		}
	}
}

