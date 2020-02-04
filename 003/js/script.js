// Селектор тегов
// console.log($('*'));
// console.log($('div'));

//Селектор id
// console.log($('#content'));

//Селектор классов
// console.log($('.container'));

//Смешанный селектор
// console.log($('div#content'));
// console.log($('div#content.test'));
// console.log($('div.test#content'));

//Комбинация селекторов
// console.log($('div, p'));
// console.log($('div p'));
// console.log($('div>p')); // -- непосредственные потомки
// console.log($('div>p+p')); //  сестринский элемент 
//---------------------------- непосредственного потомка
// console.log($('a[href]')); // тег a имеет атрибут href
// console.log($('a[href$="t"]')); // атрибут href оканчивается на t
// console.log($('a[href^="#"]')); // атрибут href начинается на #
// console.log($('ul[class~="nav"]')); // одно из значений класса = nav
console.log($('ul[class|="test"]')); // первое значение класса = nav