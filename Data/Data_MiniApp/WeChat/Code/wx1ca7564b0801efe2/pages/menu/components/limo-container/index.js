var e = require("../../../../b/helpers/typeof"), t = require("../../../../b/helpers/objectWithoutProperties"), r = require("../../../../b/helpers/objectSpread2"), a = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), o = [ "url", "data", "header" ];

Component({
    behaviors: [ a.containerBehavior ],
    properties: {
        config: {
            type: Object,
            value: {}
        },
        data: {
            type: Object,
            value: {}
        },
        preview: {
            type: Boolean,
            value: !1
        },
        container: {
            type: String,
            value: "OVAL-BUILD-SCOPE"
        }
    },
    pageLifetimes: {
        show: function() {
            (this.properties.config || {}).triggleOnPageShow && this.requestContainerData(this.properties.config);
        }
    },
    lifetimes: {
        created: function() {
            this.layout = null, this.modules = {}, this.commonData = {}, this.commonFunc = {};
        },
        attached: function() {
            var e, t = getCurrentPages(), r = t[t.length - 1];
            r.limoContainer && (this.commonFunc = r.limoContainer.commonFunc), r.limoContainer = this, 
            this.properties.config && !this.properties.config.triggleOnPageShow && this.requestContainerData(this.properties.config), 
            this.properties.data && (this.properties.data.container_data || this.properties.data.data) && (this.commonData = this.properties.data.container_data || this.properties.data.data), 
            e = {
                platform: "mp",
                container: this.data.container
            }, (0, a._initMetric)(e, "prod", "1.8.3"), (0, a.reportMetric)("LimoLayoutPV", [ 1 ]);
        }
    },
    data: {},
    methods: {
        requestContainerData: function(e) {
            var t = this, a = e.requests, o = e.header, i = e.interceptor;
            Array.isArray(a) ? Promise.all(a.map(function(e) {
                return t.requestData(r({
                    header: o
                }, e));
            })).then(function(e) {
                var r = [];
                e.forEach(function(e) {
                    200 === e.statusCode ? r.push(e.data) : console.warn("error statusCode ".concat(e.statusCode));
                }), t.applyPreviewData(r, i);
            }).catch(function(e) {
                return console.error(e.message || e);
            }) : a && this.requestData(r({
                header: o
            }, a)).then(function(e) {
                if (200 !== e.statusCode) throw new Error("error statusCode ".concat(e.statusCode));
                t.applyPreviewData(e.data, i);
            }).catch(function(e) {
                return console.error(e.message || e);
            });
        },
        requestData: function(e) {
            var a = e.url, i = e.data, n = e.header, s = t(e, o);
            return a ? new Promise(function(e, t) {
                wx.request(r(r({
                    url: a,
                    data: i,
                    header: n
                }, s), {}, {
                    success: function(t) {
                        e(t);
                    },
                    fail: function(e) {
                        t(e);
                    }
                }));
            }) : Promise.reject(new Error("invalid url"));
        },
        applyPreviewData: function(t, r) {
            var a = Array.isArray(t) ? t[0] : t;
            if ("function" == typeof r) {
                var o = getCurrentPages(), i = o[o.length - 1];
                a = r.call(i, a);
            }
            if (!a || "object" !== e(a) || Array.isArray(a)) throw new Error("invalid preview data");
            this.layout.setData({
                data: a
            });
        },
        linked: a.linked,
        unLinked: a.unLinked,
        selectModules: a.selectModules,
        selectModule: a.selectModule,
        destroyModule: a.destroyModule,
        hasModule: a.hasModule,
        getLayoutModules: a.getLayoutModules,
        collectModulesData: a.collectModulesData,
        collectModuleData: a.collectModuleData,
        validateModels: a.validateModels,
        triggleModelsOnShow: a.triggleModelsOnShow,
        triggleModelsOnLoad: a.triggleModelsOnLoad,
        triggleModelsOnHide: a.triggleModelsOnHide,
        setCommonData: a.setCommonData,
        getCommonData: a.getCommonData,
        registerEvent: a.registerEvent,
        revoke: a.revoke,
        limoDidRender: a.limoDidRender
    }
});