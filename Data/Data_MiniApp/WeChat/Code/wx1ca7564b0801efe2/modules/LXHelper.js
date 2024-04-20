var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendPV = exports.sendPD = exports.sendMV = exports.sendMC = exports.sendDuration = exports.appendLxBizParams = exports.LxBizParamsOnshowHandle = void 0;

require("../lib/mix/util"), e(require("../api/rmsStorage"));

var r = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), s = (r.LXReporter._getMixRMSGlobalLxBizParams, 
r.LXReporter.sendPV);

exports.sendPV = s;

var o = r.LXReporter.sendMV;

exports.sendMV = o;

var t = r.LXReporter.sendMC;

exports.sendMC = t;

r.LXReporter.sendME;

var a = r.LXReporter.sendPD;

exports.sendPD = a;

exports.sendDuration = function(e, r) {
    return o(e, null, null, {
        duration: r
    });
};

r.LXReporter.clearLxBizParams;

var n = r.LXReporter.appendCommonParam;

exports.appendLxBizParams = n;

var p = r.LXReporter.pageShowInit;

exports.LxBizParamsOnshowHandle = p;