var getPrototypeOf = require("./getPrototypeOf"), isNativeReflectConstruct = require("./isNativeReflectConstruct"), possibleConstructorReturn = require("./possibleConstructorReturn");

function _createSuper(t) {
    var e = isNativeReflectConstruct();
    return function() {
        var r, o = getPrototypeOf(t);
        if (e) {
            var s = getPrototypeOf(this).constructor;
            r = Reflect.construct(o, arguments, s);
        } else r = o.apply(this, arguments);
        return possibleConstructorReturn(this, r);
    };
}

module.exports = _createSuper;