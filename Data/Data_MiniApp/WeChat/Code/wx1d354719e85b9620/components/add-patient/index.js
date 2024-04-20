(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/add-patient/index" ], {
    "025b": function(a, t, e) {
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {
            return i;
        });
        var i = {
            uIcon: function() {
                return e.e("node-modules/uview-ui/components/u-icon/u-icon").then(e.bind(null, "f86b"));
            },
            peaceSelect: function() {
                return e.e("components/peace-select/peace-select").then(e.bind(null, "a0fe"));
            }
        }, n = function() {
            var a = this;
            a.$createElement;
            a._self._c, a._isMounted || (a.e0 = function(t) {
                a.showRelation = !0;
            }, a.e1 = function(t) {
                a.showRelation = !0;
            }, a.e2 = function(t) {
                a.showRelation = !1;
            });
        }, r = [];
    },
    "204f": function(a, t, e) {
        var i = e("dfb5");
        e.n(i).a;
    },
    "455b": function(a, t, e) {
        e.r(t);
        var i = e("98f3"), n = e.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(a) {
            e.d(t, a, function() {
                return i[a];
            });
        }(r);
        t.default = n.a;
    },
    "6bcd": function(a, t, e) {
        e.r(t);
        var i = e("025b"), n = e("455b");
        for (var r in n) [ "default" ].indexOf(r) < 0 && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(r);
        e("204f");
        var d = e("f0c5"), s = Object(d.a)(n.default, i.b, i.c, !1, null, "8007a2a2", null, !1, i.a, void 0);
        t.default = s.exports;
    },
    "98f3": function(a, t, e) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                name: "",
                idCard: "",
                age: "",
                relation: "",
                guardianName: "",
                guardianIdCard: ""
            }, i = [ {
                value: 0,
                label: "本人"
            }, {
                value: 1,
                label: "父母"
            }, {
                value: 2,
                label: "爱人"
            }, {
                value: 3,
                label: "孩子"
            }, {
                value: 4,
                label: "挚友"
            } ], n = [ {
                value: 0,
                label: "父母"
            }, {
                value: 1,
                label: "爱人"
            }, {
                value: 2,
                label: "孩子"
            }, {
                value: 3,
                label: "挚友"
            } ], r = {
                data: function() {
                    return {
                        imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL,
                        hasSelf: !1,
                        hasGuardian: !1,
                        relationDic: [].concat(i),
                        patient: Object.assign({}, e),
                        rules: Object.assign({}, e),
                        needGuardianAge: 6,
                        guardianAgeLimit: 18,
                        showRelation: !1,
                        relationSelector: [ 0 ]
                    };
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                watch: {
                    list: {
                        handler: function(a) {
                            var t = this, e = !1, r = !1;
                            a.forEach(function(a) {
                                "本人" === a.relation && (e = !0), a.intAge >= t.guardianAgeLimit && (r = !0);
                            }), e ? (this.hasSelf = e, this.relationDic = [].concat(n), this.hasGuardian = r) : (this.hasSelf = e, 
                            this.relationDic = [].concat(i), this.hasGuardian = r);
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                created: function() {
                    a.$on(this.$CONSTANT.EMIT.EMIT_TYPE.PERSON_SELECTGUARDIAN, this.getValueCallback);
                },
                destroyed: function() {
                    a.$off(this.$CONSTANT.EMIT.EMIT_TYPE.PERSON_SELECTGUARDIAN);
                },
                methods: {
                    getValueCallback: function(a) {
                        console.log(a), this.patient.guardianName = a.name, this.patient.guardianIdCard = a.idCard, 
                        this.rules.guardianName = "", this.rules.guardianIdCard = "";
                        var t = this.checkCanSubmit();
                        this.$emit("update", {
                            detail: {
                                patient: this.patient,
                                canSubmit: t
                            }
                        });
                    },
                    updateRealInfo: function(a) {
                        if (this.patient = Object.assign({}, this.patient, a), this.patient.name ? this.rules.name = "" : this.rules.name = "姓名不能为空", 
                        this.patient.idCard) {
                            var t = this.analyIdCard(this.patient.idCard);
                            t ? (this.patient.age = t.age, this.rules.idCard = "", t.age && t.age >= this.needGuardianAge && (this.patient.guardianName = "", 
                            this.patient.guardianIdCard = "", this.rules.guardianName = "", this.rules.guardianIdCard = "")) : this.rules.idCard = "身份证格式错误";
                        } else this.rules.idCard = "身份证号不能为空";
                        this.relationSelector = [ 0 ], this.patient.relation = "本人";
                        var e = this.checkCanSubmit();
                        this.$emit("update", {
                            detail: {
                                patient: this.patient,
                                canSubmit: e
                            }
                        });
                    },
                    watchInput: function(a) {
                        var t = a.currentTarget.dataset.name, e = a.detail.value && a.detail.value.length > 0 ? a.detail.value.replace(/(^\s*)|(\s*$)/g, "") : "";
                        switch (t) {
                          case "name":
                            this.patient.name = e;
                            break;

                          case "idCard":
                            this.patient.idCard = e;
                            break;

                          case "guardianName":
                            this.patient.guardianName = e;
                            break;

                          case "guardianIdCard":
                            this.patient.guardianIdCard = e;
                        }
                    },
                    watchBlur: function(a) {
                        var t = a.currentTarget.dataset.name, e = a.detail.value && a.detail.value.length > 0 ? a.detail.value.replace(/(^\s*)|(\s*$)/g, "") : "", i = "";
                        switch (t) {
                          case "name":
                            this.patient.name = e, this.rules.name = e ? "" : "姓名不能为空";
                            break;

                          case "idCard":
                            if (this.patient.idCard = e, e) if (i = this.analyIdCard(e)) {
                                var n = "" === this.patient.age ? i.age : this.patient.age;
                                this.patient.age = n, this.rules.idCard = "", n && n >= this.needGuardianAge && (this.patient.guardianName = "", 
                                this.patient.guardianIdCard = "", this.rules.guardianName = "", this.rules.guardianIdCard = "");
                            } else this.rules.idCard = "身份证格式错误"; else ("" === this.patient.age || this.patient.age >= this.needGuardianAge) && (this.rules.idCard = "身份证号不能为空");
                            break;

                          case "guardianName":
                            this.patient.guardianName = e, this.rules.guardianName = e ? "" : "监护人姓名不能为空";
                            break;

                          case "guardianIdCard":
                            this.patient.guardianIdCard = e, e ? e ? (i = this.analyIdCard(e)) ? i.age < this.guardianAgeLimit ? this.rules.guardianIdCard = "监护人年龄不能小于18岁" : this.rules.guardianIdCard = "" : this.rules.guardianIdCard = "监护人身份证格式错误" : this.rules.guardianIdCard = "" : this.rules.guardianIdCard = "监护人身份证号不能为空";
                        }
                        var r = this.checkCanSubmit();
                        this.$emit("update", {
                            detail: {
                                patient: this.patient,
                                canSubmit: r
                            }
                        });
                    },
                    bindRelation: function(a) {
                        this.relationSelector = [ a[0].value ], this.patient.relation = a[0].label, this.showRelation = !1;
                        var t = this.checkCanSubmit();
                        this.$emit("update", {
                            detail: {
                                patient: this.patient,
                                canSubmit: t
                            }
                        });
                    },
                    validateForm: function() {
                        var a = this.patient, t = {};
                        if (a.name || (t.name = "姓名不能为空"), a.age >= this.needGuardianAge ? a.idCard ? a.idCard && !this.validateIdCard(a.idCard) && (t.idCard = "身份证格式错误") : t.idCard = "身份证号不能为空" : a.idCard && !this.validateIdCard(a.idCard) && (t.idCard = "身份证格式错误"), 
                        a.relation || (t.relation = "请选择关系"), "" !== a.age && a.age < this.needGuardianAge) if (a.guardianName || (t.guardianName = "监护人姓名不能为空"), 
                        a.guardianIdCard) {
                            var e = this.analyIdCard(a.guardianIdCard);
                            e ? e.age < this.guardianAgeLimit && (t.guardianIdCard = "监护人年龄不能小于18岁") : t.guardianIdCard = "监护人身份证格式错误";
                        } else t.guardianIdCard = "监护人身份证号不能为空";
                        return !(Object.keys(t).length > 0 && (this.rules = Object.assign({}, this.rules, t), 
                        1));
                    },
                    checkCanSubmit: function() {
                        var a = this.patient, t = this.analyIdCard(a.guardianIdCard);
                        return !(!a.name || !a.idCard || a.idCard && !this.validateIdCard(a.idCard) || !a.relation || a.age < this.needGuardianAge && !a.guardianName || a.age < this.needGuardianAge && !a.guardianIdCard || a.age < this.needGuardianAge && a.guardianIdCard && !t || a.age < this.needGuardianAge && a.guardianIdCard && t && t.age < this.guardianAgeLimit);
                    },
                    goGuardianList: function() {
                        this.$Router.push({
                            path: "/pages/person/guardian/list",
                            query: {
                                hasSelf: this.hasSelf,
                                emit: this.$CONSTANT.EMIT.EMIT_TYPE.PERSON_SELECTGUARDIAN
                            }
                        });
                    },
                    analyIdCard: function(a) {
                        if (!this.validateIdCard(a)) return !1;
                        var t, e = "", i = "", n = "", r = "";
                        if (15 == a.length) {
                            if (a.substr(8, 2) > 12 || a.substr(10, 2) > 31) return !1;
                            n = a.toString().charAt(14) % 2, e = "19" + a.substr(6, 2) + "-" + a.substr(8, 2) + "-" + a.substr(10, 2), 
                            i = "19" + a.substr(6, 2) + "/" + a.substr(8, 2) + "/" + a.substr(10, 2);
                        }
                        18 == a.length && (n = a.toString().charAt(16) % 2, e = a.substr(6, 4) + "-" + a.substr(10, 2) + "-" + a.substr(12, 2), 
                        i = a.substr(6, 4) + "/" + a.substr(10, 2) + "/" + a.substr(12, 2)), t = n ? "男" : "女";
                        var d = new Date(i), s = new Date();
                        return r = s.getFullYear() - d.getFullYear(), (s.getMonth() < d.getMonth() || s.getMonth() == d.getMonth() && s.getDate() < d.getDate()) && r--, 
                        {
                            birthday: e,
                            sex: t,
                            age: r
                        };
                    },
                    validateIdCard: function(a) {
                        if (!a) return !1;
                        var t = !0;
                        if (a = a.toUpperCase()) if (a.match(/^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[X])$/i)) if ({
                            11: "北京",
                            12: "天津",
                            13: "河北",
                            14: "山西",
                            15: "内蒙古",
                            21: "辽宁",
                            22: "吉林",
                            23: "黑龙江 ",
                            31: "上海",
                            32: "江苏",
                            33: "浙江",
                            34: "安徽",
                            35: "福建",
                            36: "江西",
                            37: "山东",
                            41: "河南",
                            42: "湖北 ",
                            43: "湖南",
                            44: "广东",
                            45: "广西",
                            46: "海南",
                            50: "重庆",
                            51: "四川",
                            52: "贵州",
                            53: "云南",
                            54: "西藏 ",
                            61: "陕西",
                            62: "甘肃",
                            63: "青海",
                            64: "宁夏",
                            65: "新疆",
                            71: "台湾",
                            81: "香港",
                            82: "澳门",
                            91: "国外 "
                        }[a.substr(0, 2)]) {
                            if (18 === a.length) {
                                a = a.split("");
                                for (var e = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], i = 0, n = 0; n < 17; n++) i += parseInt(a[n]) * e[n];
                                [ 1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2 ][i % 11].toString() !== a[17] && (t = !1);
                            }
                        } else t = !1; else t = !1; else t = !1;
                        return t;
                    }
                }
            };
            t.default = r;
        }).call(this, e("543d").default);
    },
    dfb5: function(a, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/add-patient/index-create-component", {
    "components/add-patient/index-create-component": function(a, t, e) {
        e("543d").createComponent(e("6bcd"));
    }
}, [ [ "components/add-patient/index-create-component" ] ] ]);