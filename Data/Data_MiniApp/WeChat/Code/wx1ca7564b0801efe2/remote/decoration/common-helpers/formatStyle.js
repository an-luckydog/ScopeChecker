Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatStyle = void 0;

var o = require("../../../b/helpers/objectSpread2"), t = {
    color: "color",
    border: "border",
    fontWeight: "font-weight",
    fontStyle: "font-style",
    borderColor: "border-color",
    boxShadow: "box-shadow",
    borderBottom: "border-bottom",
    borderLeft: "border-left",
    borderBottomStyle: "border-bottom-style",
    background: "background",
    backgroundColor: "background-color",
    backgroundImage: "background-image",
    textAlign: "text-align",
    borderStyle: "border-style",
    justifyContent: "justify-content"
}, r = {
    width: "width",
    height: "height",
    minHeight: "min-height",
    minWidth: "min-width",
    left: "left",
    top: "top",
    lineHeight: "line-height",
    fontSize: "font-size",
    borderWidth: "border-width",
    borderRadius: "border-radius",
    marginRight: "margin-right",
    marginBottom: "margin-bottom",
    marginTop: "margin-top"
}, e = o(o({}, t), r);

exports.formatStyle = function(o) {
    if (!o) return "";
    var t = [];
    return Object.keys(o).forEach(function(r) {
        (o[r] || 0 === o[r]) && e[r] && t.push("".concat(e[r], ": ").concat(n(r, o[r])));
    }), t.join(";");
};

var n = function(o, e) {
    return t[o] ? c(o, e) : r[o] ? i(o, e) : void 0;
}, i = function(o, t) {
    return (t + "").match(/%|(vw)|(px)|(vh)/g) ? t + "" : 2 * +t + "rpx";
}, c = function(o, t) {
    return "Object" === Object.prototype.toString.call(t).slice(8, -1) ? function(o, t) {
        return t.backgroundImg ? "url(".concat(t.backgroundImg, ") center / 100% 100% no-repeat") : t.color ? t.color : t[o];
    }(o, t) : "background" === o ? "url(".concat(t, ") center / 100% auto no-repeat") : "backgroundImage" === o ? "url(".concat(t, ");") : t;
};