//Написать регулярное выражение что бы выводилось только расширение файла.
var str = 'main.min.js';
var result = /\.[a-z]*$/gi
console.log( str.match(result) );