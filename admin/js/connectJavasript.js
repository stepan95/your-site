// Функція connectJavasript для підключення нових улементів в кінець body
function connectJavasript(url) {
	let script = document.createElement("script");
	script.src = url;
	script.setAttribute('type', 'text/javascript');
	document.body.appendChild(script);
}

