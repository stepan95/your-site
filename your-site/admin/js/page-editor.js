
let elementsHtmlArray = [
	['<h1 style="text-align: center; padding: 10px 20px; font-size: 35px; font-weight: bold; color: rgb(15, 119, 255);" class="ys-text" contenteditable="true">Зразок конструктора</h1>'],
	['<h2 style="text-align: center; padding: 10px 20px; font-size: 30px; font-style: italic;" class="ys-text" contenteditable="true">Творча ідея cms</h2>'],
	[
		['Будуть класи реалізовано не докінця'],
		['<ol class="ys-text" style="padding: 40px; font-size: 20px;" contenteditable="true"><li>Зробити декілька мов для CMS та сайту</li><li>Зробити модульну систему (інтернет магазин, блог).&nbsp;</li><li>Конструктор працюватиме з сторінками та записами. Та новоствореними сторінками в адмінці.</li></ol>'],
		['<ul class="ys-text" style="padding: 40px; font-size: 20px;" contenteditable="true"><li>Мови можна реалізувати через обєкт у файлі кожна мова може знаходитися в окремих папках.</li><li>Структура буде проста кожен модуль буде перебувати в окремій папці. А підключатиметься визовом функції та корегуванням php файлу конфіг.</li><li>Підключення нових файлів буде просте визовом відповідної функції. Та стфорення окремого файлу з власними кодом.</li></ul>']
	],
	['<p class="ys-text" style="padding: 10px 20px; font-size: 20px; text-align: justify; background: rgb(120, 120, 120); color: rgb(255, 255, 255);" contenteditable="true">Це зразок що можна зробити, а зробити можна дуже багато. Цю CMS я буду реалізовувати у вільний час та при бажанні. Зараз вона більше як полігон для тестування та відпрацявання навичок. Звісно булоб смішто без професійного досвіду та підходу писати великий проєкт і реалізовувати безліч функцій без бібліотек. Потім розуміти що багато чого потрібно дописувати, оптимізовувати. пересортовувати код.&nbsp;<br><br>В подальшому я планую підівчити плагіни ті що Ви скинули. Плагін для переводу мови ніби хороший але має недостатки адже при створенні нової мови сторінки потрібно створювати вручну, а ще меню для мови. Кожна cms має як плюси так і недоліки з якими лекше змиритися. Для вордпрес писати свій плагін який вирішуватиме недостатки це не зовсім хороша ідея адже вордпрес оновлюється і його потрібно підтримувати.&nbsp;<br><br>Але хочу зазна чити що плюсів всежтаки більше власне в готових ріщеннях.</p>'],
	['<p class="ys-text" style="padding: 10px 20px; font-size: 24px; text-align: center;" contenteditable="true">Щодо мого коду:<br> так є речі які я пишу потім як правило хочу переписати. Зразу накидаю як ідею, чернетку а потім коли бачу якусь структуру переосмислюю та переформовую.</p>'],
	['<h5 style="text-align: center; padding: 10px 20px; font-size: 18px;" class="ys-text last-click" contenteditable="true">Щоб змінити зображення необхідно два рази клацнути.</h5>'],
	[
		[''],
		['<div class="ys-image" style="padding: 10px; max-width: 500px;"><img style="border-radius: 50px;" src="../download/img19.jpg"></div>']
	],
	['<p class="ys-text" style="padding: 10px 20px; font-size: 20px;" contenteditable="true">У конструкторі можна зробити декілька шаблонів які можна налаштовувати. Ви&nbsp; правельно написали коли робиш щось своє робиш все що хочеш. Втому і плюс самописних речей, а решта вони завершуються. Для сайтів і правда краще використовувати готові технології. Адже багато чого є вже реалізовано. bootstrap мені сподобався в плані розробки виграєш час.</p>'],
	['<p class="ys-text" style="padding: 10px 20px; font-size: 24px; text-align: center; color: rgb(224, 0, 0);" contenteditable="true">Весь зміст був створений за допоиогою самописного конструктора. Накинув як ідею та демонстрацію роботи. Звісно в масив переніс вручну. Ця можливість не реалізована</p>'],
];


// Доступні кнопки
let buttonPanel = {

}

// Підключаємо модулі в html
connectJavasript('js/class-editor.js');
connectJavasript('js/class-element-editor.js');
connectJavasript('js/class-text-editor.js');
connectJavasript('js/class-button-editor.js');
connectJavasript('js/class-image-editor.js');
connectJavasript('js/class-bloc-editor.js');
connectJavasript('js/function-last-click.js');
connectJavasript('js/function-load-img.js');
connectJavasript('js/class-moving.js');
connectJavasript('js/function-editor-navigation.js');
connectJavasript('js/object-add-image.js');





window.onload = function() {
	new Moving(document.querySelector('#ys-add-element-panel .ys-add-element-panel-header'));
	new TextEditor(
		'ys-text',
		{
			'ys-button-h1' : ['Заголовок<br>1','font' , ['<h1 style="text-align: center; padding: 10px 20px; font-size: 35px;" class="ys-text">Текст</h1>']],
			'ys-button-h2' : ['Заголовок<br>2','font', ['<h2 style="text-align: center; padding: 10px 20px; font-size: 30px;" class="ys-text">Текст</h2>']],
			'ys-button-h3' : ['Заголовок<br>3','font', ['<h3 style="text-align: center; padding: 10px 20px; font-size: 25px;" class="ys-text">Текст</h3>']],
			'ys-button-h4' : ['Заголовок<br>4','font', ['<h4 style="text-align: center; padding: 10px 20px; font-size: 20px;" class="ys-text">Текст</h4>']],
			'ys-button-h5' : ['Заголовок<br>5','font', ['<h5 style="text-align: center; padding: 10px 20px; font-size: 18px;" class="ys-text">Текст</h5>']],
			'ys-button-h6' : ['Заголовок<br>6','font', ['<h6 style="text-align: center; padding: 10px 20px; font-size: 14px;" class="ys-text">Текст</h6>']],
			'ys-button-p' : ['Абзац','align-left', ['<p class="ys-text" style="padding: 10px 20px; font-size: 14px;">Текст</p>']],
			'ys-button-ol' : ['Список<br>номнрований','listing-number', ['<ol class="ys-text" style="padding: 10px 20px; font-size: 14px;">Пункт списку</ol>']],
			'ys-button-ul' : ['Список<br>неномерований','listine-dots', ['<ul class="ys-text" style="padding: 10px 20px; font-size: 14px;">Пункт списку</ul>']],
		},
		[
			['justify-left','data-textalign="left"','','Текст зліва'],
			['justify-center','data-textalign="center"','','Текст по центру'],
			['justify-right','data-textalign="right"','','Текст зправа'],
			['justify-all','data-textalign="justify"','','Текст по ширені'],
			['bold','data-fontweight="bold"','','Жирний'],
			['italic-alt','data-fontstyle="italic"','','Курсив'],
			['brush','','<input id="ys-color" type="color">','Колір шрифту'],
			['color-bucket','','<input id="ys-background" type="color">','Колір фону'],
			['text-height','','<input id="ys-font-size" type="text" value="20px">','Розмір шрифту'],
			['ruler','','<input id="ys-padding" type="text" value="10px">','Внутрішні відступи'],
		]
	);
	new ButtonEditor(
		'ys-button',
		{
			'ys-button-bot' : ['Кнопка','hand-drag1', ['<a class="ys-button" style="padding: 10px 20px; font-size: 14px; border-radius: 3px;" href="#">Кнопка</a>']],
		},
		[
			['justify-left','data-textalign="left"','','Текст зліва'],
			['justify-center','data-textalign="center"','','Текст по центру'],
			['justify-right','data-textalign="right"','','Текст зправа'],
			['bold','data-fontweight="bold"','','Жирний'],
			['italic-alt','data-fontstyle="italic"','','Курсив'],
			['brush','','<input id="ys-color" type="color">','Колір шрифту'],
			['color-bucket','','<input id="ys-background" type="color">','Колір фону'],
			['text-height','','<input id="ys-font-size" type="text" value="20px">','Розмір шрифту'],
			['ruler','','<input id="ys-padding" type="text" value="10px">','Внутрішні відступи'],
			['compass-alt-3','','<input id="ys-border-radius" type="text" value="10px">','Закруглення країв'],
			
		]
	);

	new ImageEditor(
		'ys-image',
		{
			'ys-button-img' : ['Зображення','image', ['<div class="ys-image" style="padding: 0px;"><img style="border-radius: 6px;" src="../download/img1.jpg"></div>']],
		},
		[
			['color-bucket','','<input id="ys-background" type="color">','Колір фону'],
			['ruler','','<input id="ys-padding" type="text" value="10px">','Внутрішні відступи'],
			['ruler','','<input id="ys-max-width" type="text" value="10px">','Максимальна ширина'],
			['ruler','','<input id="ys-max-height" type="text" value="10px">','Максимальна висота'],
			['compass-alt-3','','<input id="ys-border-radius" type="text" value="10px">','Закруглення країв'],
		]
	);
	new ImageEditor(
		'ys-image',
		{
			'ys-button-img' : ['Зображення','image', ['<div class="ys-image" style="padding: 0px;"><img style="border-radius: 6px;" src="../download/img1.jpg"></div>']],
		},
		[
			['color-bucket','','<input id="ys-background" type="color">','Колір фону'],
			['ruler','','<input id="ys-padding" type="text" value="10px">','Внутрішні відступи'],
			['ruler','','<input id="ys-max-width" type="text" value="10px">','Максимальна ширина'],
			['ruler','','<input id="ys-max-height" type="text" value="10px">','Максимальна висота'],
			['compass-alt-3','','<input id="ys-border-radius" type="text" value="10px">','Закруглення країв'],
		]
	);

	new BlocEditor(
		'ys-panel-bloc-nested',
		[
			['color-bucket','','<input id="ys-background" type="color">','Колір фону'],
			['brush','','<input id="ys-color" type="color">','Колір шрифту'],
			['ruler','','<input id="ys-padding" type="text" value="10px">','Внутрішні відступи'],
			['compass-alt-3','','<input id="ys-border-radius" type="text" value="10px">','Закруглення країв'],
		]
	);

		
 	new Editor(elementsHtmlArray, buttonPanel).start();
}