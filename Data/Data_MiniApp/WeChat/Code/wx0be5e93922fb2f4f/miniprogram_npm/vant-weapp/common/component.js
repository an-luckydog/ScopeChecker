Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = {};
    r(t, o, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var i = t.relation;
    i && (o.relations = Object.assign(o.relations || {}, e({}, "../".concat(i.name, "/index"), i)));
    o.externalClasses = o.externalClasses || [], o.externalClasses.push("custom-class"), 
    o.behaviors = o.behaviors || [], o.behaviors.push(s.basic), t.field && o.behaviors.push("wx://form-field");
    o.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, (0, a.observe)(t, o), Component(o);
};

var e = require("../../../@babel/runtime/helpers/defineProperty"), s = require("../mixins/basic"), a = require("../mixins/observer/index");

function r(e, s, a) {
    Object.keys(a).forEach(function(r) {
        e[r] && (s[a[r]] = e[r]);
    });
}