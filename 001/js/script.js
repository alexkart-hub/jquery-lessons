// jQuery(document).ready(function() {
//     var a = jQuery('p');
//     a.hide().addClass('noVisible');
//     console.log(a);
// });
// $(document).ready(() => {
//     var p = $('p');
//     console.log(p);
// });
// $(() => {
//     var r = $('p');
//     console.log(r);
// });
// let $j = jQuery.noConflict();
// $j(() => {
//     var f = $j('p');
//     console.log(f);
// });

// После того, как была объявлена 
// переменная $j, функция $ перестала 
// работать и вызывает ошибку

$(() => {
    var a = $('a:not("p a")');
    console.log(a);
    a.hide().addClass('noVisible');
});