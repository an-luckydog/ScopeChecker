var e = require("../../@babel/runtime/helpers/typeof");

function r(e) {
    var r = {
        omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
        },
        noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
        },
        prefixHeaderId: {
            defaultValue: !1,
            describe: "Specify a prefix to generated header ids",
            type: "string"
        },
        headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
        },
        parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
        },
        simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
        },
        literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
        },
        strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
        },
        tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
        },
        tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
        },
        ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
        },
        tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
        },
        smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
        },
        smartIndentationFix: {
            defaultValue: !1,
            description: "Tries to smartly fix identation in es6 strings",
            type: "boolean"
        }
    };
    if (!1 === e) return JSON.parse(JSON.stringify(r));
    var t = {};
    for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n].defaultValue);
    return t;
}

var t = {}, n = {}, s = {}, a = r(!0), o = {
    github: {
        omitExtraWLInCodeBlocks: !0,
        prefixHeaderId: "user-content-",
        simplifiedAutoLink: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0
    },
    vanilla: r(!0)
};

function i(r, n) {
    var s = n ? "Error in " + n + " extension->" : "Error in unnamed extension", a = {
        valid: !0,
        error: ""
    };
    t.helper.isArray(r) || (r = [ r ]);
    for (var o = 0; o < r.length; ++o) {
        var i = s + " sub-extension " + o + ": ", l = r[o];
        if ("object" !== e(l)) return a.valid = !1, a.error = i + "must be an object, but " + e(l) + " given", 
        a;
        if (!t.helper.isString(l.type)) return a.valid = !1, a.error = i + 'property "type" must be a string, but ' + e(l.type) + " given", 
        a;
        var c = l.type = l.type.toLowerCase();
        if ("language" === c && (c = l.type = "lang"), "html" === c && (c = l.type = "output"), 
        "lang" !== c && "output" !== c && "listener" !== c) return a.valid = !1, a.error = i + "type " + c + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', 
        a;
        if ("listener" === c) {
            if (t.helper.isUndefined(l.listeners)) return a.valid = !1, a.error = i + '. Extensions of type "listener" must have a property called "listeners"', 
            a;
        } else if (t.helper.isUndefined(l.filter) && t.helper.isUndefined(l.regex)) return a.valid = !1, 
        a.error = i + c + ' extensions must define either a "regex" property or a "filter" method', 
        a;
        if (l.listeners) {
            if ("object" !== e(l.listeners)) return a.valid = !1, a.error = i + '"listeners" property must be an object but ' + e(l.listeners) + " given", 
            a;
            for (var u in l.listeners) if (l.listeners.hasOwnProperty(u) && "function" != typeof l.listeners[u]) return a.valid = !1, 
            a.error = i + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + u + " must be a function but " + e(l.listeners[u]) + " given", 
            a;
        }
        if (l.filter) {
            if ("function" != typeof l.filter) return a.valid = !1, a.error = i + '"filter" must be a function, but ' + e(l.filter) + " given", 
            a;
        } else if (l.regex) {
            if (t.helper.isString(l.regex) && (l.regex = new RegExp(l.regex, "g")), !l.regex instanceof RegExp) return a.valid = !1, 
            a.error = i + '"regex" property must either be a string or a RegExp object, but ' + e(l.regex) + " given", 
            a;
            if (t.helper.isUndefined(l.replace)) return a.valid = !1, a.error = i + '"regex" extensions must implement a replace string or function', 
            a;
        }
    }
    return a;
}

function l(e, r) {
    return "~E" + r.charCodeAt(0) + "E";
}

t.helper = {}, t.extensions = {}, t.setOption = function(e, r) {
    return a[e] = r, this;
}, t.getOption = function(e) {
    return a[e];
}, t.getOptions = function() {
    return a;
}, t.resetOptions = function() {
    a = r(!0);
}, t.setFlavor = function(e) {
    if (o.hasOwnProperty(e)) {
        var r = o[e];
        for (var t in r) r.hasOwnProperty(t) && (a[t] = r[t]);
    }
}, t.getDefaultOptions = function(e) {
    return r(e);
}, t.subParser = function(e, r) {
    if (t.helper.isString(e)) {
        if (void 0 === r) {
            if (n.hasOwnProperty(e)) return n[e];
            throw Error("SubParser named " + e + " not registered!");
        }
        n[e] = r;
    }
}, t.extension = function(e, r) {
    if (!t.helper.isString(e)) throw Error("Extension 'name' must be a string");
    if (e = t.helper.stdExtName(e), t.helper.isUndefined(r)) {
        if (!s.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
        return s[e];
    }
    "function" == typeof r && (r = r()), t.helper.isArray(r) || (r = [ r ]);
    var n = i(r, e);
    if (!n.valid) throw Error(n.error);
    s[e] = r;
}, t.getAllExtensions = function() {
    return s;
}, t.removeExtension = function(e) {
    delete s[e];
}, t.resetExtensions = function() {
    s = {};
}, t.validateExtension = function(e) {
    var r = i(e, null);
    return !!r.valid || (console.warn(r.error), !1);
}, t.hasOwnProperty("helper") || (t.helper = {}), t.helper.isString = function(e) {
    return "string" == typeof e || e instanceof String;
}, t.helper.isFunction = function(e) {
    return e && "[object Function]" === {}.toString.call(e);
}, t.helper.forEach = function(e, r) {
    if ("function" == typeof e.forEach) e.forEach(r); else for (var t = 0; t < e.length; t++) r(e[t], t, e);
}, t.helper.isArray = function(e) {
    return e.constructor === Array;
}, t.helper.isUndefined = function(e) {
    return void 0 === e;
}, t.helper.stdExtName = function(e) {
    return e.replace(/[_-]||\s/g, "").toLowerCase();
}, t.helper.escapeCharactersCallback = l, t.helper.escapeCharacters = function(e, r, t) {
    var n = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
    t && (n = "\\\\" + n);
    var s = new RegExp(n, "g");
    return e = e.replace(s, l);
};

var c = function(e, r, t, n) {
    var s, a, o, i, l, c = n || "", u = c.indexOf("g") > -1, p = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")), h = new RegExp(r, c.replace(/g/g, "")), d = [];
    do {
        for (s = 0; o = p.exec(e); ) if (h.test(o[0])) s++ || (i = (a = p.lastIndex) - o[0].length); else if (s && !--s) {
            l = o.index + o[0].length;
            var f = {
                left: {
                    start: i,
                    end: a
                },
                match: {
                    start: a,
                    end: o.index
                },
                right: {
                    start: o.index,
                    end: l
                },
                wholeMatch: {
                    start: i,
                    end: l
                }
            };
            if (d.push(f), !u) return d;
        }
    } while (s && (p.lastIndex = a));
    return d;
};

t.helper.matchRecursiveRegExp = function(e, r, t, n) {
    for (var s = c(e, r, t, n), a = [], o = 0; o < s.length; ++o) a.push([ e.slice(s[o].wholeMatch.start, s[o].wholeMatch.end), e.slice(s[o].match.start, s[o].match.end), e.slice(s[o].left.start, s[o].left.end), e.slice(s[o].right.start, s[o].right.end) ]);
    return a;
}, t.helper.replaceRecursiveRegExp = function(e, r, n, s, a) {
    if (!t.helper.isFunction(r)) {
        var o = r;
        r = function() {
            return o;
        };
    }
    var i = c(e, n, s, a), l = e, u = i.length;
    if (u > 0) {
        var p = [];
        0 !== i[0].wholeMatch.start && p.push(e.slice(0, i[0].wholeMatch.start));
        for (var h = 0; h < u; ++h) p.push(r(e.slice(i[h].wholeMatch.start, i[h].wholeMatch.end), e.slice(i[h].match.start, i[h].match.end), e.slice(i[h].left.start, i[h].left.end), e.slice(i[h].right.start, i[h].right.end))), 
        h < u - 1 && p.push(e.slice(i[h].wholeMatch.end, i[h + 1].wholeMatch.start));
        i[u - 1].wholeMatch.end < e.length && p.push(e.slice(i[u - 1].wholeMatch.end)), 
        l = p.join("");
    }
    return l;
}, t.helper.isUndefined(console) && (console = {
    warn: function(e) {
        alert(e);
    },
    log: function(e) {
        alert(e);
    },
    error: function(e) {
        throw e;
    }
}), t.Converter = function(r) {
    var n = {}, l = [], c = [], u = {};
    function p(e, r) {
        if (r = r || null, t.helper.isString(e)) {
            if (r = e = t.helper.stdExtName(e), t.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), 
            void function(e, r) {
                "function" == typeof e && (e = e(new t.Converter()));
                t.helper.isArray(e) || (e = [ e ]);
                var n = i(e, r);
                if (!n.valid) throw Error(n.error);
                for (var s = 0; s < e.length; ++s) switch (e[s].type) {
                  case "lang":
                    l.push(e[s]);
                    break;

                  case "output":
                    c.push(e[s]);
                    break;

                  default:
                    throw Error("Extension loader error: Type unrecognized!!!");
                }
            }(t.extensions[e], e);
            if (t.helper.isUndefined(s[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
            e = s[e];
        }
        "function" == typeof e && (e = e()), t.helper.isArray(e) || (e = [ e ]);
        var n = i(e, r);
        if (!n.valid) throw Error(n.error);
        for (var a = 0; a < e.length; ++a) {
            switch (e[a].type) {
              case "lang":
                l.push(e[a]);
                break;

              case "output":
                c.push(e[a]);
            }
            if (e[a].hasOwnProperty(u)) for (var o in e[a].listeners) e[a].listeners.hasOwnProperty(o) && h(o, e[a].listeners[o]);
        }
    }
    function h(r, n) {
        if (!t.helper.isString(r)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + e(r) + " given");
        if ("function" != typeof n) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + e(n) + " given");
        u.hasOwnProperty(r) || (u[r] = []), u[r].push(n);
    }
    !function() {
        for (var s in r = r || {}, a) a.hasOwnProperty(s) && (n[s] = a[s]);
        if ("object" !== e(r)) throw Error("Converter expects the passed parameter to be an object, but " + e(r) + " was passed instead.");
        for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        n.extensions && t.helper.forEach(n.extensions, p);
    }(), this._dispatch = function(e, r, t, n) {
        if (u.hasOwnProperty(e)) for (var s = 0; s < u[e].length; ++s) {
            var a = u[e][s](e, r, this, t, n);
            a && void 0 !== a && (r = a);
        }
        return r;
    }, this.listen = function(e, r) {
        return h(e, r), this;
    }, this.makeHtml = function(e) {
        if (!e) return e;
        var r = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: l,
            outputModifiers: c,
            converter: this,
            ghCodeBlocks: []
        };
        return e = (e = (e = (e = e.replace(/~/g, "~T")).replace(/\$/g, "~D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n"), 
        n.smartIndentationFix && (e = function(e) {
            var r = e.match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + r + "}", "gm");
            return e.replace(t, "");
        }(e)), e = e, e = t.subParser("detab")(e, n, r), e = t.subParser("stripBlankLines")(e, n, r), 
        t.helper.forEach(l, function(s) {
            e = t.subParser("runExtension")(s, e, n, r);
        }), e = t.subParser("hashPreCodeTags")(e, n, r), e = t.subParser("githubCodeBlocks")(e, n, r), 
        e = t.subParser("hashHTMLBlocks")(e, n, r), e = t.subParser("hashHTMLSpans")(e, n, r), 
        e = t.subParser("stripLinkDefinitions")(e, n, r), e = t.subParser("blockGamut")(e, n, r), 
        e = t.subParser("unhashHTMLSpans")(e, n, r), e = (e = (e = t.subParser("unescapeSpecialChars")(e, n, r)).replace(/~D/g, "$$")).replace(/~T/g, "~"), 
        t.helper.forEach(c, function(s) {
            e = t.subParser("runExtension")(s, e, n, r);
        }), e;
    }, this.setOption = function(e, r) {
        n[e] = r;
    }, this.getOption = function(e) {
        return n[e];
    }, this.getOptions = function() {
        return n;
    }, this.addExtension = function(e, r) {
        p(e, r = r || null);
    }, this.useExtension = function(e) {
        p(e);
    }, this.setFlavor = function(e) {
        if (o.hasOwnProperty(e)) {
            var r = o[e];
            for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
        }
    }, this.removeExtension = function(e) {
        t.helper.isArray(e) || (e = [ e ]);
        for (var r = 0; r < e.length; ++r) {
            for (var n = e[r], s = 0; s < l.length; ++s) l[s] === n && l[s].splice(s, 1);
            for (;0 < c.length; ++s) c[0] === n && c[0].splice(s, 1);
        }
    }, this.getAllExtensions = function() {
        return {
            language: l,
            output: c
        };
    };
}, t.subParser("anchors", function(e, r, n) {
    var s = function(e, r, s, a, o, i, l, c) {
        t.helper.isUndefined(c) && (c = ""), e = r;
        var u = s, p = a.toLowerCase(), h = o, d = c;
        if (!h) if (p || (p = u.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p, t.helper.isUndefined(n.gUrls[p])) {
            if (!(e.search(/\(\s*\)$/m) > -1)) return e;
            h = "";
        } else h = n.gUrls[p], t.helper.isUndefined(n.gTitles[p]) || (d = n.gTitles[p]);
        var f = '<a href="' + (h = t.helper.escapeCharacters(h, "*_", !1)) + '"';
        return "" !== d && null !== d && (d = d.replace(/"/g, "&quot;"), f += ' title="' + (d = t.helper.escapeCharacters(d, "*_", !1)) + '"'), 
        f += ">" + u + "</a>";
    };
    return e = (e = (e = (e = n.converter._dispatch("anchors.before", e, r, n)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, s)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, s)).replace(/(\[([^\[\]]+)])()()()()()/g, s), 
    e = n.converter._dispatch("anchors.after", e, r, n);
}), t.subParser("autoLinks", function(e, r, n) {
    function s(e, r) {
        var t = r;
        return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), '<a href="' + r + '">' + t + "</a>";
    }
    function a(e, r) {
        var n = t.subParser("unescapeSpecialChars")(r);
        return t.subParser("encodeEmailAddress")(n);
    }
    return e = (e = (e = n.converter._dispatch("autoLinks.before", e, r, n)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi, s)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, a), 
    r.simplifiedAutoLink && (e = (e = e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi, s)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi, a)), 
    e = n.converter._dispatch("autoLinks.after", e, r, n);
}), t.subParser("blockGamut", function(e, r, n) {
    e = n.converter._dispatch("blockGamut.before", e, r, n), e = t.subParser("blockQuotes")(e, r, n), 
    e = t.subParser("headers")(e, r, n);
    var s = t.subParser("hashBlock")("<hr />", r, n);
    return e = (e = (e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, s)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, s)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, s), 
    e = t.subParser("lists")(e, r, n), e = t.subParser("codeBlocks")(e, r, n), e = t.subParser("tables")(e, r, n), 
    e = t.subParser("hashHTMLBlocks")(e, r, n), e = t.subParser("paragraphs")(e, r, n), 
    e = n.converter._dispatch("blockGamut.after", e, r, n);
}), t.subParser("blockQuotes", function(e, r, n) {
    return e = (e = n.converter._dispatch("blockQuotes.before", e, r, n)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, s) {
        var a = s;
        return a = (a = (a = a.replace(/^[ \t]*>[ \t]?/gm, "~0")).replace(/~0/g, "")).replace(/^[ \t]+$/gm, ""), 
        a = t.subParser("githubCodeBlocks")(a, r, n), a = (a = (a = t.subParser("blockGamut")(a, r, n)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
            var t = r;
            return t = (t = t.replace(/^  /gm, "~0")).replace(/~0/g, "");
        }), t.subParser("hashBlock")("<blockquote>\n" + a + "\n</blockquote>", r, n);
    }), e = n.converter._dispatch("blockQuotes.after", e, r, n);
}), t.subParser("codeBlocks", function(e, r, n) {
    e = n.converter._dispatch("codeBlocks.before", e, r, n);
    return e = (e = (e += "~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, s, a) {
        var o = s, i = a, l = "\n";
        return o = t.subParser("outdent")(o), o = t.subParser("encodeCode")(o), o = (o = (o = t.subParser("detab")(o)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
        r.omitExtraWLInCodeBlocks && (l = ""), o = "<pre><code>" + o + l + "</code></pre>", 
        t.subParser("hashBlock")(o, r, n) + i;
    })).replace(/~0/, ""), e = n.converter._dispatch("codeBlocks.after", e, r, n);
}), t.subParser("codeSpans", function(e, r, n) {
    return void 0 === (e = n.converter._dispatch("codeSpans.before", e, r, n)) && (e = ""), 
    e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, n, s) {
        var a = s;
        return a = (a = a.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), r + "<code>" + (a = t.subParser("encodeCode")(a)) + "</code>";
    }), e = n.converter._dispatch("codeSpans.after", e, r, n);
}), t.subParser("detab", function(e) {
    return e = (e = (e = (e = (e = e.replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "~A~B")).replace(/~B(.+?)~A/g, function(e, r) {
        for (var t = r, n = 4 - t.length % 4, s = 0; s < n; s++) t += " ";
        return t;
    })).replace(/~A/g, "    ")).replace(/~B/g, "");
}), t.subParser("encodeAmpsAndAngles", function(e) {
    return e = (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?\$!])/gi, "&lt;");
}), t.subParser("encodeBackslashEscapes", function(e) {
    return e = (e = e.replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g, t.helper.escapeCharactersCallback);
}), t.subParser("encodeCode", function(e) {
    return e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), 
    e = t.helper.escapeCharacters(e, "*_{}[]\\", !1);
}), t.subParser("encodeEmailAddress", function(e) {
    var r = [ function(e) {
        return "&#" + e.charCodeAt(0) + ";";
    }, function(e) {
        return "&#x" + e.charCodeAt(0).toString(16) + ";";
    }, function(e) {
        return e;
    } ];
    return e = (e = '<a href="' + (e = (e = "mailto:" + e).replace(/./g, function(e) {
        if ("@" === e) e = r[Math.floor(2 * Math.random())](e); else if (":" !== e) {
            var t = Math.random();
            e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e);
        }
        return e;
    })) + '">' + e + "</a>").replace(/">.+:/g, '">');
}), t.subParser("escapeSpecialCharsWithinTagAttributes", function(e) {
    return e = e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi, function(e) {
        var r = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
        return r = t.helper.escapeCharacters(r, "\\`*_", !1);
    });
}), t.subParser("githubCodeBlocks", function(e, r, n) {
    return r.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, r, n), 
    e = (e = (e += "~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, s, a) {
        var o = r.omitExtraWLInCodeBlocks ? "" : "\n";
        return a = t.subParser("encodeCode")(a), a = "<pre><code" + (s ? ' class="' + s + " language-" + s + '"' : "") + ">" + (a = (a = (a = t.subParser("detab")(a)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + o + "</code></pre>", 
        a = t.subParser("hashBlock")(a, r, n), "\n\n~G" + (n.ghCodeBlocks.push({
            text: e,
            codeblock: a
        }) - 1) + "G\n\n";
    })).replace(/~0/, ""), n.converter._dispatch("githubCodeBlocks.after", e, r, n)) : e;
}), t.subParser("hashBlock", function(e, r, t) {
    return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n";
}), t.subParser("hashElement", function(e, r, t) {
    return function(e, r) {
        var n = r;
        return n = (n = (n = n.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), 
        n = "\n\n~K" + (t.gHtmlBlocks.push(n) - 1) + "K\n\n";
    };
}), t.subParser("hashHTMLBlocks", function(e, r, n) {
    for (var s = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ], a = function(e, r, t, s) {
        var a = e;
        return -1 !== t.search(/\bmarkdown\b/) && (a = t + n.converter.makeHtml(r) + s), 
        "\n\n~K" + (n.gHtmlBlocks.push(a) - 1) + "K\n\n";
    }, o = 0; o < s.length; ++o) e = t.helper.replaceRecursiveRegExp(e, a, "^(?: |\\t){0,3}<" + s[o] + "\\b[^>]*>", "</" + s[o] + ">", "gim");
    return e = (e = (e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, r, n))).replace(/(<!--[\s\S]*?-->)/g, t.subParser("hashElement")(e, r, n))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, r, n));
}), t.subParser("hashHTMLSpans", function(e, r, n) {
    for (var s = t.helper.matchRecursiveRegExp(e, "<code\\b[^>]*>", "</code>", "gi"), a = 0; a < s.length; ++a) e = e.replace(s[a][0], "~L" + (n.gHtmlSpans.push(s[a][0]) - 1) + "L");
    return e;
}), t.subParser("unhashHTMLSpans", function(e, r, t) {
    for (var n = 0; n < t.gHtmlSpans.length; ++n) e = e.replace("~L" + n + "L", t.gHtmlSpans[n]);
    return e;
}), t.subParser("hashPreCodeTags", function(e, r, n) {
    return e = t.helper.replaceRecursiveRegExp(e, function(e, r, s, a) {
        var o = s + t.subParser("encodeCode")(r) + a;
        return "\n\n~G" + (n.ghCodeBlocks.push({
            text: e,
            codeblock: o
        }) - 1) + "G\n\n";
    }, "^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^(?: |\\t){0,3}</code>\\s*</pre>", "gim");
}), t.subParser("headers", function(e, r, n) {
    e = n.converter._dispatch("headers.before", e, r, n);
    var s = r.prefixHeaderId, a = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart), o = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, i = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
    function l(e) {
        var r, a = e.replace(/[^\w]/g, "").toLowerCase();
        return n.hashLinkCounts[a] ? r = a + "-" + n.hashLinkCounts[a]++ : (r = a, n.hashLinkCounts[a] = 1), 
        !0 === s && (s = "section"), t.helper.isString(s) ? s + r : r;
    }
    return e = (e = (e = e.replace(o, function(e, s) {
        var o = t.subParser("spanGamut")(s, r, n), i = r.noHeaderId ? "" : ' id="' + l(s) + '"', c = "<h" + a + i + ">" + o + "</h" + a + ">";
        return t.subParser("hashBlock")(c, r, n);
    })).replace(i, function(e, s) {
        var o = t.subParser("spanGamut")(s, r, n), i = r.noHeaderId ? "" : ' id="' + l(s) + '"', c = a + 1, u = "<h" + c + i + ">" + o + "</h" + c + ">";
        return t.subParser("hashBlock")(u, r, n);
    })).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function(e, s, o) {
        var i = t.subParser("spanGamut")(o, r, n), c = r.noHeaderId ? "" : ' id="' + l(o) + '"', u = a - 1 + s.length, p = "<h" + u + c + ">" + i + "</h" + u + ">";
        return t.subParser("hashBlock")(p, r, n);
    }), e = n.converter._dispatch("headers.after", e, r, n);
}), t.subParser("images", function(e, r, n) {
    function s(e, r, s, a, o, i, l, c) {
        var u = n.gUrls, p = n.gTitles, h = n.gDimensions;
        if (s = s.toLowerCase(), c || (c = ""), "" === a || null === a) {
            if ("" !== s && null !== s || (s = r.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + s, 
            t.helper.isUndefined(u[s])) return e;
            a = u[s], t.helper.isUndefined(p[s]) || (c = p[s]), t.helper.isUndefined(h[s]) || (o = h[s].width, 
            i = h[s].height);
        }
        r = r.replace(/"/g, "&quot;"), r = t.helper.escapeCharacters(r, "*_", !1);
        var d = '<img src="' + (a = t.helper.escapeCharacters(a, "*_", !1)) + '" alt="' + r + '"';
        return c && (c = c.replace(/"/g, "&quot;"), d += ' title="' + (c = t.helper.escapeCharacters(c, "*_", !1)) + '"'), 
        o && i && (d += ' width="' + (o = "*" === o ? "auto" : o) + '"', d += ' height="' + (i = "*" === i ? "auto" : i) + '"'), 
        d += " />";
    }
    return e = (e = (e = n.converter._dispatch("images.before", e, r, n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g, s)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g, s), 
    e = n.converter._dispatch("images.after", e, r, n);
}), t.subParser("italicsAndBold", function(e, r, t) {
    return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = (e = e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, "$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, "$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, "<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>") : (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), 
    e = t.converter._dispatch("italicsAndBold.after", e, r, t);
}), t.subParser("lists", function(e, r, n) {
    function s(e, s) {
        n.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
        var a = /\n[ \t]*\n(?!~0)/.test(e += "~0");
        return e = (e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(e, s, o, i, l, c, u) {
            u = u && "" !== u.trim();
            var p = t.subParser("outdent")(l, r, n), h = "";
            return c && r.tasklists && (h = ' class="task-list-item" style="list-style-type: none;"', 
            p = p.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                return u && (e += " checked"), e += ">";
            })), s || p.search(/\n{2,}/) > -1 ? (p = t.subParser("githubCodeBlocks")(p, r, n), 
            p = t.subParser("blockGamut")(p, r, n)) : (p = (p = t.subParser("lists")(p, r, n)).replace(/\n$/, ""), 
            p = a ? t.subParser("paragraphs")(p, r, n) : t.subParser("spanGamut")(p, r, n)), 
            p = "\n<li" + h + ">" + p + "</li>\n";
        })).replace(/~0/g, ""), n.gListLevel--, s && (e = e.replace(/\s+$/, "")), e;
    }
    function a(e, r, t) {
        var n = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, a = [], o = "";
        if (-1 !== e.search(n)) {
            !function e(a) {
                var i = a.search(n);
                -1 !== i ? (o += "\n\n<" + r + ">" + s(a.slice(0, i), !!t) + "</" + r + ">\n\n", 
                n = "ul" === (r = "ul" === r ? "ol" : "ul") ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, 
                e(a.slice(i))) : o += "\n\n<" + r + ">" + s(a, !!t) + "</" + r + ">\n\n";
            }(e);
            for (var i = 0; i < a.length; ++i) ;
        } else o = "\n\n<" + r + ">" + s(e, !!t) + "</" + r + ">\n\n";
        return o;
    }
    e = n.converter._dispatch("lists.before", e, r, n), e += "~0";
    var o = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    return n.gListLevel ? e = e.replace(o, function(e, r, t) {
        return a(r, t.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
    }) : (o = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, 
    e = e.replace(o, function(e, r, t, n) {
        return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol");
    })), e = e.replace(/~0/, ""), e = n.converter._dispatch("lists.after", e, r, n);
}), t.subParser("outdent", function(e) {
    return e = (e = e.replace(/^(\t|[ ]{1,4})/gm, "~0")).replace(/~0/g, "");
}), t.subParser("paragraphs", function(e, r, n) {
    for (var s = (e = (e = (e = n.converter._dispatch("paragraphs.before", e, r, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), a = [], o = s.length, i = 0; i < o; i++) {
        var l = s[i];
        l.search(/~(K|G)(\d+)\1/g) >= 0 || (l = (l = t.subParser("spanGamut")(l, r, n)).replace(/^([ \t]*)/g, "<p>"), 
        l += "</p>"), a.push(l);
    }
    for (o = a.length, i = 0; i < o; i++) {
        for (var c = "", u = a[i], p = !1; u.search(/~(K|G)(\d+)\1/) >= 0; ) {
            var h = RegExp.$1, d = RegExp.$2;
            c = (c = "K" === h ? n.gHtmlBlocks[d] : p ? t.subParser("encodeCode")(n.ghCodeBlocks[d].text) : n.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$"), 
            u = u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
        }
        a[i] = u;
    }
    return e = (e = (e = a.join("\n\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
    n.converter._dispatch("paragraphs.after", e, r, n);
}), t.subParser("runExtension", function(e, r, t, n) {
    if (e.filter) r = e.filter(r, n.converter, t); else if (e.regex) {
        var s = e.regex;
        !s instanceof RegExp && (s = new RegExp(s, "g")), r = r.replace(s, e.replace);
    }
    return r;
}), t.subParser("spanGamut", function(e, r, n) {
    return e = n.converter._dispatch("spanGamut.before", e, r, n), e = t.subParser("codeSpans")(e, r, n), 
    e = t.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, n), e = t.subParser("encodeBackslashEscapes")(e, r, n), 
    e = t.subParser("images")(e, r, n), e = t.subParser("anchors")(e, r, n), e = t.subParser("autoLinks")(e, r, n), 
    e = t.subParser("encodeAmpsAndAngles")(e, r, n), e = t.subParser("italicsAndBold")(e, r, n), 
    e = (e = t.subParser("strikethrough")(e, r, n)).replace(/  +\n/g, " <br />\n"), 
    e = n.converter._dispatch("spanGamut.after", e, r, n);
}), t.subParser("strikethrough", function(e, r, t) {
    return r.strikethrough && (e = (e = t.converter._dispatch("strikethrough.before", e, r, t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, "<del>$1</del>"), 
    e = t.converter._dispatch("strikethrough.after", e, r, t)), e;
}), t.subParser("stripBlankLines", function(e) {
    return e.replace(/^[ \t]+$/gm, "");
}), t.subParser("stripLinkDefinitions", function(e, r, n) {
    return e = (e = (e += "~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm, function(e, s, a, o, i, l, c) {
        return s = s.toLowerCase(), n.gUrls[s] = t.subParser("encodeAmpsAndAngles")(a), 
        l ? l + c : (c && (n.gTitles[s] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && o && i && (n.gDimensions[s] = {
            width: o,
            height: i
        }), "");
    })).replace(/~0/, "");
}), t.subParser("tables", function(e, r, n) {
    if (!r.tables) return e;
    function s(e, s) {
        return "<td" + s + ">" + t.subParser("spanGamut")(e, r, n) + "</td>\n";
    }
    return e = (e = n.converter._dispatch("tables.before", e, r, n)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm, function(e) {
        var a, o = e.split("\n");
        for (a = 0; a < o.length; ++a) /^[ \t]{0,3}\|/.test(o[a]) && (o[a] = o[a].replace(/^[ \t]{0,3}\|/, "")), 
        /\|[ \t]*$/.test(o[a]) && (o[a] = o[a].replace(/\|[ \t]*$/, ""));
        var i, l, c, u, p = o[0].split("|").map(function(e) {
            return e.trim();
        }), h = o[1].split("|").map(function(e) {
            return e.trim();
        }), d = [], f = [], g = [], b = [];
        for (o.shift(), o.shift(), a = 0; a < o.length; ++a) "" !== o[a].trim() && d.push(o[a].split("|").map(function(e) {
            return e.trim();
        }));
        if (p.length < h.length) return e;
        for (a = 0; a < h.length; ++a) g.push((i = h[a], /^:[ \t]*--*$/.test(i) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(i) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(i) ? ' style="text-align:center;"' : ""));
        for (a = 0; a < p.length; ++a) t.helper.isUndefined(g[a]) && (g[a] = ""), f.push((l = p[a], 
        c = g[a], u = void 0, u = "", l = l.trim(), r.tableHeaderId && (u = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'), 
        "<th" + u + c + ">" + (l = t.subParser("spanGamut")(l, r, n)) + "</th>\n"));
        for (a = 0; a < d.length; ++a) {
            for (var v = [], m = 0; m < f.length; ++m) t.helper.isUndefined(d[a][m]), v.push(s(d[a][m], g[m]));
            b.push(v);
        }
        return function(e, r) {
            for (var t = "<table>\n<thead>\n<tr>\n", n = e.length, s = 0; s < n; ++s) t += e[s];
            for (t += "</tr>\n</thead>\n<tbody>\n", s = 0; s < r.length; ++s) {
                t += "<tr>\n";
                for (var a = 0; a < n; ++a) t += r[s][a];
                t += "</tr>\n";
            }
            return t += "</tbody>\n</table>\n";
        }(f, b);
    }), e = n.converter._dispatch("tables.after", e, r, n);
}), t.subParser("unescapeSpecialChars", function(e) {
    return e = e.replace(/~E(\d+)E/g, function(e, r) {
        var t = parseInt(r);
        return String.fromCharCode(t);
    });
}), module.exports = t;