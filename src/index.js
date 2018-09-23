module.exports = function getZerosCount(number) {

    return (number / 5 < 1 ? 0 : Math.trunc(number / 5) + getZerosCount(Math.floor(number / 5)));
}
