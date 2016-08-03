function getRandom() {
    return Math.random();
}
console.log(getRandom());
function getRandomLessThan(max) {
    return Math.random() * max;
}
console.log(getRandomLessThan(5));
function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomBetween(5, 10));
function roundDown(num) {
    return Math.floor(num);
}
console.log(roundDown(5));
function getRandomInteger() {
    return Math.floor(Math.random() * 10);
}
console.log(getRandomInteger());
