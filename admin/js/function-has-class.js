/*
Перевіряє чи існує переданий клас
Приймає елемент та сам клас
*/
function hasClass(el, cl) {
	let ret = false;
	if (el != null) {
		for(let i = 0; el.classList.length > i; i++) {
			if (el.classList[i] == cl) {
				ret = true;
			}
		}
	}
	return ret; 
}