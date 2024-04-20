var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(e, r) {
    for (;!Object.prototype.hasOwnProperty.call(e, r) && null !== (e = getPrototypeOf(e)); ) ;
    return e;
}

module.exports = _superPropBase;