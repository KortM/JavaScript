const isSuited = (6 + 10) / 2;
console.log(isSuited);
//Изучение типов
const admin = Symbol('Admin');
console.log(typeof admin);
let a = 5;
let b = 'string';
let c = null;
let big = BigInt(123);
let f;

console.log(typeof a, typeof b, typeof c, typeof big, typeof f);
let amountWorkDays = 40 / 5;
let hourToExitDays = (11 - 2); 
let priceHour = 80; 
console.log('Успею ли выполнить работу?: ', amountWorkDays <= hourToExitDays);
console.log('Сколько за это запрошу?: ', priceHour * (amountWorkDays * 5) + '$');

//Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000; 
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price;

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: '+ price + '$';
console.log(template3);

const template4 = `Проект 
Цена: ${price}$`
console.log(template4);

//Преобразование типов
const age = '18';
console.log(Number(age) + 5);