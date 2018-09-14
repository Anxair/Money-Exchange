module.exports = function makeExchange(currency) {
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let result = {};
    result.H = Math.trunc(currency / 50);
    result.Q = Math.trunc(currency % 50 / 25);
    result.D = Math.trunc(currency % 50 % 25 / 10);
    result.N = Math.trunc(currency % 50 % 25 % 10 / 5);
    result.P = Math.trunc(currency % 50 % 25 % 10 % 5);
    for (key in result) {
        if (result[key] === 0 || result[key] < 0)
            delete result[key];
    }
    return result;
}
