Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.checkEnv = function() {
    var r = "";
    switch ((0, e.getEnv)()) {
      case "production":
      case "ST":
      case "staging":
        r = "release";
        break;

      default:
        r = "develop";
    }
    return r;
};

var e = require("../../lib/mix/util");

require("../../constants/errorTip");