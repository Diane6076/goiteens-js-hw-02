const celsiusTemperature = 25;
const fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(celsiusTemperature + " градусів Цельсія дорівнює " + fahrenheitTemperature + " градусів Фаренгейта.");

const daysMonth = 31;
const hours = daysMonth + 24;
const min = hours * 60;
console.log('У місяці є' + hours + 'годин' + min + 'хвилин' );

const health = 80;
const energy = 40;
const healthMinus = 15;
const energyMinus = 7;
console.log('Початковий рівень здоровя гравця:>>' + health);
console.log('Початковий рівень енергії гравця:>>' + energy);
console.log('Рівень здоровя гравця після урону:>>', (80 - 15));
console.log('Рівень енергії гравця після урону:>>', (40 - 7));

const number = 5.24;
console.log('Оригінальне число:>>' + number);
console.log("Округлене число до меншого:>> " + Math.floor(5.24));


console.log(Number.parseFloat('8.54873'));

console.log(Number.parseInt('36'));

const Numbers = 75;
console.log("Число: " + Numbers);
console.log('Квадратний корінь числа:>>' +  Math.sqrt(75));

