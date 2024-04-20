function t() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
}

module.exports = function() {
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
};