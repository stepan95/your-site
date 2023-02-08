/*

Ця функція при визові присфоює css class last-click при цьому видаляє присфоєні
Приймає елемент якому присвоїти з інших елементів документа забирає

*/

function lastClick(el) {
	const lastClick = document.getElementsByClassName("last-click")[0];
    if (lastClick != undefined) lastClick.classList.remove("last-click");
	el.classList.add("last-click");
}