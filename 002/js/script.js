let var2 = $('#var2');
let var6 = $('#var6');
// console.log(var2);
// console.log(var2.parent());
// console.log(var2.parents());
// console.log(var2.parentsUntil('.container'));

// console.log(var6.prev());
// console.log(var6.next());
// console.log(var6.prevAll());
// console.log(var6.nextAll());
// console.log(var6.prevUntil('#var2'));
// console.log(var2.nextUntil('#var6'));
// console.log(var2.siblings());

let div = $('div');
// console.log(div);
// console.log(div.children());
// console.log(div.contents());
// console.log(div.find('li,ul'));
// console.log(div.find('li').first());
// console.log(div.find('ul,li').last());
// console.log(div.find('ul,li').eq(6));
let divUlLi = div.find('ul,li');
// console.log(divUlLi);
// console.log(divUlLi.eq(divUlLi.length - 1));
// console.log(divUlLi.eq(4));
// console.log(divUlLi.eq(4).closest('div'));
// console.log(var6.closest('div'));
console.log(var6.offsetParent());