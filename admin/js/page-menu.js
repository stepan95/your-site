// Підключаємо модулі в html
connectJavasript('js/function-last-click.js');
connectJavasript('js/class-moving.js');
connectJavasript('js/class-element-moving.js');
connectJavasript('js/class-menu-editor.js');
connectJavasript('js/function-has-class.js');


// Масив що прийде з сервера буду вдосконалювати зараз як ескіз
let elementsHtmlArra = [
	[1, 'url', 1, 'Головна', ''],
	[2, 'page', 1, 'Послуги', ''],
	[3, 'page', 1, 'Продукти', 'products'],
	[
		[4, 'page', 2, 'Продукти', 'products'],
		[5, 'page', 2, 'Продукти', 'products'],
	],
	[
		[6, 'page', 3, 'Продукти', 'products'],
		[7, 'page', 3, 'Продукти', 'products'],
		[8, 'page', 3, 'Продукти', 'products'],
		[9, 'page', 3, 'Продукти', 'products'],
	],
	[
		[10, 'page', 2, 'Продукти', 'products'],
		[11, 'page', 2, 'Продукти', 'products'],
		[
			[12, 'page', 3, 'Продукти', 'products'],
			[13, 'page', 3, 'Продукти', 'products'],
			[14, 'page', 3, 'Продукти', 'products'],
			[15, 'page', 3, 'Продукти', 'products'],
		],
	],
	[16, 'page', 1, 'Про нас', 'services'],
	[16, 'page', 1, 'Контакти', 'contacts'],
];


window.onload = function() {
	// Клас потребує допису
	new MenuEditor(3).navigation();
}

