/*


*/
function elementMovingAll() {
	document.getElementById('ys-page-editor').oncontextmenu = function () {
	   return false;
	};
 	for(let i = 0; document.querySelectorAll('#ys-page-editor .ys-el-panel-top').length > i; i++){
 		let el = document.querySelectorAll('#ys-page-editor .ys-el-panel-top')[i];
 		if (el.parentElement.classList[0] == 'ys-element' && el.parentElement.parentElement.classList[0] == 'ys-page-editor') {
 			new ElementMoving(el);
 		}
 		
 	}
}

