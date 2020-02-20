module.exports = function reverse (n) {
    n < 0 ? n *= -1 : n;
    return String(n).split('').reverse().join('');
}
