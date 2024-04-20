Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.translateOperationType = function(i) {
    var r = i.element, o = i.changedCount, a = i.changedWeight, p = (i.cartDishMap, 
    r.operationData);
    if (!p) return {
        id: "0"
    };
    var u = e({}, p), c = p.count, d = p.weight, s = p.unit;
    if (c === o && void 0 !== c || d === a && void 0 !== d) return u;
    var l = s && s.text && s.text.split("/")[1] || "份";
    if (void 0 !== c && void 0 !== o) if (u.count = o, c < o) p.panelType === t.PANEL_TYPE_VAL.SPEC ? u.text = "选规格" : p.panelType === t.PANEL_TYPE_VAL.PACKAGE ? u.text = "选套餐 " : p.panelType && -1 === p.minCount || (u.type = t.DISH_OPERATION_TYPE_VAL.NUMBER); else {
        var v = p.minCount;
        v && 1 !== v && o < v && (u.text = "".concat(p.minCount).concat(l, "起售"), u.type = t.DISH_OPERATION_TYPE_VAL.BUTTON);
    } else void 0 !== d && void 0 !== a && (u.weight = a, u.text = 0 === a ? "选重量" : "".concat(a).concat((0, 
    n.dealOperationUnitStr)(l)));
    return u;
};

var e = require("../../b/helpers/objectSpread2"), t = require("../../constants/menu"), n = require("../../modules/menu/dish/PropertyUtil");