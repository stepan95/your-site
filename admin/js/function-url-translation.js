// Масив алфафітів
const abcUrl = [
	['а','а'],
	['б','b'],
	['в','v'],
	['г','h'],
	['ґ','g'],
	['д','d'],
	['е','е'],
	['є','ye'],
	['ж','zh'],
	['з','z'],
	['и','y'],
	['і','i'],
	['ї','yi'],
	['й','y'],
	['к','k'],
	['л','l'],
	['м','m'],
	['н','n'],
	['о','o'],
	['п','p'],
	['р','r'],
	['с','s'],
	['т','t'],
	['у','u'],
	['ф','f'],
	['х','h'],
	['ц','ts'],
	['ч','ch'],
	['ш','sh'],
	['щ','shch'],
	['ю','yu'],
	['я','ya'],
	['ь',''],
	[' ','-'],
];


// Функція для автоперекладу
function urlTranslation(val){
	for (let i = 0; abcUrl.length > i; i++) {
		for (let s = 0; val.length > s; s++) {
			val = val.toLowerCase().replace(abcUrl[i][0], abcUrl[i][1]);
		}
	}
	return val;
}