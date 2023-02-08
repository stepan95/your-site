/*

Ця функція шукає data-src атрибут та замінює на src
Приймає imageBlock з катинками та затримує їх загрузку до появи блоку межі екрану.
Приймає в події scroll imageBlock.scrollTop
Приймає шлях до картинки за стандартом

*/
function loadImg(imageBlock, scroll = 0, srcDefault = '../favicon.png') {
	let image = imageBlock.querySelectorAll('img[src="'+srcDefault+'"]');
	if (image[0] != undefined) {
		if (imageBlock.offsetTop+imageBlock.clientHeight+scroll >= image[0].offsetTop) {
    		for(let i = 0; image.length > i; i++){
    			if (imageBlock.offsetTop+imageBlock.clientHeight+scroll >= image[i].offsetTop) 
    				image[i].setAttribute('src', image[i].dataset.src);
    		}
		}
	}
}