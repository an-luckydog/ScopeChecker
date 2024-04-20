var e = require("../../../b/helpers/interopRequireWildcard"), t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Container = void 0;

var n = require("../../../b/helpers/createForOfIteratorHelper"), i = require("../../../b/helpers/objectSpread2"), r = t(require("../../../b/regenerator")), a = require("../../../b/helpers/asyncToGenerator"), o = require("../../../b/helpers/typeof"), s = require("../../../b/helpers/classCallCheck"), u = require("../../../b/helpers/createClass"), c = require("../bindings/binding"), d = e(require("../constants/error_msgs")), l = require("../constants/literal_types"), v = e(require("../constants/metadata_keys")), h = require("../planning/metadata_reader"), f = require("../planning/planner"), _ = require("../resolution/resolver"), y = require("../syntax/binding_to_syntax"), p = require("../utils/async"), g = require("../utils/id"), A = require("../utils/serialization"), k = require("./container_snapshot"), b = require("./lookup"), m = require("./module_activation_store"), D = function() {
    function e(t) {
        s(this, e), this.id = void 0, this.parent = void 0, this.children = void 0, this.options = void 0, 
        this._middleware = void 0, this._bindingDictionary = void 0, this._activations = void 0, 
        this._deactivations = void 0, this._snapshots = void 0, this._metadataReader = void 0, 
        this._moduleActivationStore = void 0;
        var n = t || {};
        if (this.children = new Map(), "object" != o(n)) throw new Error("".concat(d.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT));
        if (void 0 === n.defaultScope) n.defaultScope = l.BindingScopeEnum.Transient; else if (n.defaultScope !== l.BindingScopeEnum.Singleton && n.defaultScope !== l.BindingScopeEnum.Transient && n.defaultScope !== l.BindingScopeEnum.Request) throw new Error("".concat(d.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE));
        if (void 0 === n.autoBindInjectable) n.autoBindInjectable = !1; else if ("boolean" != typeof n.autoBindInjectable) throw new Error("".concat(d.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE));
        if (void 0 === n.skipBaseClassChecks) n.skipBaseClassChecks = !1; else if ("boolean" != typeof n.skipBaseClassChecks) throw new Error("".concat(d.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK));
        this.options = {
            autoBindInjectable: n.autoBindInjectable,
            defaultScope: n.defaultScope,
            skipBaseClassChecks: n.skipBaseClassChecks
        }, this.id = (0, g.id)(), this._bindingDictionary = new b.Lookup(), this._snapshots = [], 
        this._middleware = null, this._activations = new b.Lookup(), this._deactivations = new b.Lookup(), 
        this.parent = null, this._metadataReader = new h.MetadataReader(), this._moduleActivationStore = new m.ModuleActivationStore();
    }
    var t, D, w, I, S, E, C, T, B;
    return u(e, [ {
        key: "load",
        value: function() {
            for (var e = this._getContainerModuleHelpersFactory(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            for (var r = 0, a = n; r < a.length; r++) {
                var o = a[r], s = e(o.id);
                o.registry(s.bindFunction, s.unbindFunction, s.isboundFunction, s.rebindFunction, s.unbindAsyncFunction, s.onActivationFunction, s.onDeactivationFunction);
            }
        }
    }, {
        key: "unload",
        value: function() {
            for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            n.forEach(function(t) {
                var n = e._removeModuleBindings(t.id);
                e._deactivateSingletons(n), e._removeModuleHandlers(t.id);
            });
        }
    }, {
        key: "bind",
        value: function(e) {
            var t = this.options.defaultScope || l.BindingScopeEnum.Transient, n = new c.Binding(e, t);
            return this._bindingDictionary.add(e, n), new y.BindingToSyntax(n);
        }
    }, {
        key: "rebind",
        value: function(e) {
            return this.unbind(e), this.bind(e);
        }
    }, {
        key: "unbind",
        value: function(e) {
            if (this._bindingDictionary.hasKey(e)) {
                var t = this._bindingDictionary.get(e);
                this._deactivateSingletons(t);
            }
            this._removeServiceFromDictionary(e);
        }
    }, {
        key: "unbindAsync",
        value: (B = a(r.default.mark(function e(t) {
            var n;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this._bindingDictionary.hasKey(t)) {
                        e.next = 4;
                        break;
                    }
                    return n = this._bindingDictionary.get(t), e.next = 4, this._deactivateSingletonsAsync(n);

                  case 4:
                    this._removeServiceFromDictionary(t);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return B.apply(this, arguments);
        })
    }, {
        key: "unbindAll",
        value: function() {
            var e = this;
            this._bindingDictionary.traverse(function(t, n) {
                e._deactivateSingletons(n);
            }), this._bindingDictionary = new b.Lookup();
        }
    }, {
        key: "unbindAllAsync",
        value: (T = a(r.default.mark(function e() {
            var t, n = this;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = [], this._bindingDictionary.traverse(function(e, i) {
                        t.push(n._deactivateSingletonsAsync(i));
                    }), e.next = 4, Promise.all(t);

                  case 4:
                    this._bindingDictionary = new b.Lookup();

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return T.apply(this, arguments);
        })
    }, {
        key: "onActivation",
        value: function(e, t) {
            this._activations.add(e, t);
        }
    }, {
        key: "onDeactivation",
        value: function(e, t) {
            this._deactivations.add(e, t);
        }
    }, {
        key: "isBound",
        value: function(e) {
            var t = this._bindingDictionary.hasKey(e);
            return !t && this.parent && (t = this.parent.isBound(e)), t;
        }
    }, {
        key: "isCurrentBound",
        value: function(e) {
            return this._bindingDictionary.hasKey(e);
        }
    }, {
        key: "isBoundNamed",
        value: function(e, t) {
            return this.isBoundTagged(e, v.NAMED_TAG, t);
        }
    }, {
        key: "isBoundTagged",
        value: function(e, t, n) {
            var i = !1;
            if (this._bindingDictionary.hasKey(e)) {
                var r = this._bindingDictionary.get(e), a = (0, f.createMockRequest)(this, e, t, n);
                i = r.some(function(e) {
                    return e.constraint(a);
                });
            }
            return !i && this.parent && (i = this.parent.isBoundTagged(e, t, n)), i;
        }
    }, {
        key: "snapshot",
        value: function() {
            this._snapshots.push(k.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
        }
    }, {
        key: "restore",
        value: function() {
            var e = this._snapshots.pop();
            if (void 0 === e) throw new Error(d.NO_MORE_SNAPSHOTS_AVAILABLE);
            this._bindingDictionary = e.bindings, this._activations = e.activations, this._deactivations = e.deactivations, 
            this._middleware = e.middleware, this._moduleActivationStore = e.moduleActivationStore;
        }
    }, {
        key: "createChild",
        value: function(t) {
            var n = new e(t || this.options);
            return n.parent = this, n;
        }
    }, {
        key: "storeChild",
        value: function(e) {
            var t;
            null == (t = this.parent) || t.children.set(e, this);
        }
    }, {
        key: "removeChild",
        value: function(e) {
            var t;
            null == (t = this.parent) || t.children.delete(e);
        }
    }, {
        key: "applyMiddleware",
        value: function() {
            for (var e = this._middleware ? this._middleware : this._planAndResolve(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            this._middleware = n.reduce(function(e, t) {
                return t(e);
            }, e);
        }
    }, {
        key: "applyCustomMetadataReader",
        value: function(e) {
            this._metadataReader = e;
        }
    }, {
        key: "get",
        value: function(e) {
            var t = this._getNotAllArgs(e, !1);
            return this._getButThrowIfAsync(t);
        }
    }, {
        key: "getAsync",
        value: (C = a(r.default.mark(function e(t) {
            var n;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = this._getNotAllArgs(t, !1), e.abrupt("return", this._get(n));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return C.apply(this, arguments);
        })
    }, {
        key: "getTagged",
        value: function(e, t, n) {
            var i = this._getNotAllArgs(e, !1, t, n);
            return this._getButThrowIfAsync(i);
        }
    }, {
        key: "getTaggedAsync",
        value: (E = a(r.default.mark(function e(t, n, i) {
            var a;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = this._getNotAllArgs(t, !1, n, i), e.abrupt("return", this._get(a));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, n) {
            return E.apply(this, arguments);
        })
    }, {
        key: "getNamed",
        value: function(e, t) {
            return this.getTagged(e, v.NAMED_TAG, t);
        }
    }, {
        key: "getNamedAsync",
        value: function(e, t) {
            return this.getTaggedAsync(e, v.NAMED_TAG, t);
        }
    }, {
        key: "getAll",
        value: function(e) {
            var t = this._getAllArgs(e);
            return this._getButThrowIfAsync(t);
        }
    }, {
        key: "getAllAsync",
        value: function(e) {
            var t = this._getAllArgs(e);
            return this._getAll(t);
        }
    }, {
        key: "_preDestroy",
        value: function(e, t) {
            var n, i;
            if (Reflect.hasMetadata(v.PRE_DESTROY, e)) return null == (n = (i = t)[Reflect.getMetadata(v.PRE_DESTROY, e).value]) ? void 0 : n.call(i);
        }
    }, {
        key: "_removeModuleHandlers",
        value: function(e) {
            var t = this._moduleActivationStore.remove(e);
            this._activations.removeIntersection(t.onActivations), this._deactivations.removeIntersection(t.onDeactivations);
        }
    }, {
        key: "_removeModuleBindings",
        value: function(e) {
            return this._bindingDictionary.removeByCondition(function(t) {
                return t.moduleId === e;
            });
        }
    }, {
        key: "_deactivate",
        value: function(e, t) {
            var n = this, i = Object.getPrototypeOf(t).constructor;
            try {
                if (this._deactivations.hasKey(e.serviceIdentifier)) {
                    var r = this._deactivateContainer(t, this._deactivations.get(e.serviceIdentifier).values());
                    if ((0, p.isPromise)(r)) return this._handleDeactivationError(r.then(function() {
                        return n._propagateContainerDeactivationThenBindingAndPreDestroyAsync(e, t, i);
                    }), i);
                }
                var a = this._propagateContainerDeactivationThenBindingAndPreDestroy(e, t, i);
                if ((0, p.isPromise)(a)) return this._handleDeactivationError(a, i);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                if (e instanceof Error) throw new Error(d.ON_DEACTIVATION_ERROR(i.name, e.message));
            }
        }
    }, {
        key: "_handleDeactivationError",
        value: (S = a(r.default.mark(function e(t, n) {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, t;

                  case 3:
                    e.next = 9;
                    break;

                  case 5:
                    if (e.prev = 5, e.t0 = e.catch(0), !(e.t0 instanceof Error)) {
                        e.next = 9;
                        break;
                    }
                    throw new Error(d.ON_DEACTIVATION_ERROR(n.name, e.t0.message));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 5 ] ]);
        })), function(e, t) {
            return S.apply(this, arguments);
        })
    }, {
        key: "_deactivateContainer",
        value: function(e, t) {
            for (var n = this, i = t.next(); i.value; ) {
                var r = i.value(e);
                if ((0, p.isPromise)(r)) return r.then(function() {
                    return n._deactivateContainerAsync(e, t);
                });
                i = t.next();
            }
        }
    }, {
        key: "_deactivateContainerAsync",
        value: (I = a(r.default.mark(function e(t, n) {
            var i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    i = n.next();

                  case 1:
                    if (!i.value) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 4, i.value(t);

                  case 4:
                    i = n.next();

                  case 5:
                    e.next = 1;
                    break;

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e, t) {
            return I.apply(this, arguments);
        })
    }, {
        key: "_getContainerModuleHelpersFactory",
        value: function() {
            var e = this, t = function(e, t) {
                e._binding.moduleId = t;
            }, n = function(n) {
                return function(i) {
                    var r = e.bind(i);
                    return t(r, n), r;
                };
            }, i = function(n) {
                return function(i) {
                    var r = e.rebind(i);
                    return t(r, n), r;
                };
            }, r = function(t) {
                return function(n, i) {
                    e._moduleActivationStore.addActivation(t, n, i), e.onActivation(n, i);
                };
            }, a = function(t) {
                return function(n, i) {
                    e._moduleActivationStore.addDeactivation(t, n, i), e.onDeactivation(n, i);
                };
            };
            return function(t) {
                return {
                    bindFunction: n(t),
                    isboundFunction: function(t) {
                        return e.isBound(t);
                    },
                    onActivationFunction: r(t),
                    onDeactivationFunction: a(t),
                    rebindFunction: i(t),
                    unbindFunction: function(t) {
                        return e.unbind(t);
                    },
                    unbindAsyncFunction: function(t) {
                        return e.unbindAsync(t);
                    }
                };
            };
        }
    }, {
        key: "_getAll",
        value: function(e) {
            return Promise.all(this._get(e));
        }
    }, {
        key: "_get",
        value: function(e) {
            var t = i(i({}, e), {}, {
                contextInterceptor: function(e) {
                    return e;
                },
                targetType: l.TargetTypeEnum.Variable
            });
            if (this._middleware) {
                var n = this._middleware(t);
                if (null == n) throw new Error(d.INVALID_MIDDLEWARE_RETURN);
                return n;
            }
            return this._planAndResolve()(t);
        }
    }, {
        key: "_getButThrowIfAsync",
        value: function(e) {
            var t = this._get(e);
            if ((0, p.isPromiseOrContainsPromise)(t)) throw new Error(d.LAZY_IN_SYNC(e.serviceIdentifier));
            return t;
        }
    }, {
        key: "_getAllArgs",
        value: function(e) {
            return {
                avoidConstraints: !0,
                isMultiInject: !0,
                serviceIdentifier: e
            };
        }
    }, {
        key: "_getNotAllArgs",
        value: function(e, t, n, i) {
            return {
                avoidConstraints: !1,
                isMultiInject: t,
                serviceIdentifier: e,
                key: n,
                value: i
            };
        }
    }, {
        key: "_planAndResolve",
        value: function() {
            var e = this;
            return function(t) {
                var n = (0, f.plan)(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
                return n = t.contextInterceptor(n), (0, _.resolve)(n);
            };
        }
    }, {
        key: "_deactivateIfSingleton",
        value: function(e) {
            var t = this;
            if (e.activated) return (0, p.isPromise)(e.cache) ? e.cache.then(function(n) {
                return t._deactivate(e, n);
            }) : this._deactivate(e, e.cache);
        }
    }, {
        key: "_deactivateSingletons",
        value: function(e) {
            var t, i = n(e);
            try {
                for (i.s(); !(t = i.n()).done; ) {
                    var r = t.value, a = this._deactivateIfSingleton(r);
                    if ((0, p.isPromise)(a)) throw new Error(d.ASYNC_UNBIND_REQUIRED);
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i.e(e);
            } finally {
                i.f();
            }
        }
    }, {
        key: "_deactivateSingletonsAsync",
        value: (w = a(r.default.mark(function e(t) {
            var n = this;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Promise.all(t.map(function(e) {
                        return n._deactivateIfSingleton(e);
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return w.apply(this, arguments);
        })
    }, {
        key: "_propagateContainerDeactivationThenBindingAndPreDestroy",
        value: function(e, t, n) {
            return this.parent ? this._deactivate.bind(this.parent)(e, t) : this._bindingDeactivationAndPreDestroy(e, t, n);
        }
    }, {
        key: "_propagateContainerDeactivationThenBindingAndPreDestroyAsync",
        value: (D = a(r.default.mark(function e(t, n, i) {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.parent) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 3, this._deactivate.bind(this.parent)(t, n);

                  case 3:
                    e.next = 7;
                    break;

                  case 5:
                    return e.next = 7, this._bindingDeactivationAndPreDestroyAsync(t, n, i);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, n) {
            return D.apply(this, arguments);
        })
    }, {
        key: "_removeServiceFromDictionary",
        value: function(e) {
            try {
                this._bindingDictionary.remove(e);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                throw new Error("".concat(d.CANNOT_UNBIND, " ").concat((0, A.getServiceIdentifierAsString)(e)));
            }
        }
    }, {
        key: "_bindingDeactivationAndPreDestroy",
        value: function(e, t, n) {
            var i = this;
            if ("function" == typeof e.onDeactivation) {
                var r = e.onDeactivation(t);
                if ((0, p.isPromise)(r)) return r.then(function() {
                    return i._preDestroy(n, t);
                });
            }
            return this._preDestroy(n, t);
        }
    }, {
        key: "_bindingDeactivationAndPreDestroyAsync",
        value: (t = a(r.default.mark(function e(t, n, i) {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (e.t0 = "function" == typeof t.onDeactivation, !e.t0) {
                        e.next = 4;
                        break;
                    }
                    return e.next = 4, t.onDeactivation(n);

                  case 4:
                    return e.next = 6, this._preDestroy(i, n);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, n, i) {
            return t.apply(this, arguments);
        })
    } ], [ {
        key: "merge",
        value: function(t, n) {
            for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
            var o = new e(), s = [ t, n ].concat(r).map(function(e) {
                return (0, f.getBindingDictionary)(e);
            }), u = (0, f.getBindingDictionary)(o);
            return s.forEach(function(e) {
                var t;
                t = u, e.traverse(function(e, n) {
                    n.forEach(function(e) {
                        t.add(e.serviceIdentifier, e.clone());
                    });
                });
            }), o;
        }
    } ]), e;
}();

exports.Container = D;