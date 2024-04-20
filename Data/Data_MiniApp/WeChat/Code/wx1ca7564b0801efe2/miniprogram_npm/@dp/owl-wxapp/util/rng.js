Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), 
    r[t] = e >>> ((3 & t) << 3) & 255;
    return r;
};

var r = Array(16);