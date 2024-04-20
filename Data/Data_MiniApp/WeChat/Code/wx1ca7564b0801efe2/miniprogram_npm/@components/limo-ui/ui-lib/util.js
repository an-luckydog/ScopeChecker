Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dealClassName = function(e) {
    return e ? e.split(" ").map(function(e) {
        return "" + e;
    }).join(" ") : "";
};